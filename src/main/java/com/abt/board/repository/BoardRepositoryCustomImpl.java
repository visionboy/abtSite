package com.abt.board.repository;

import com.abt.board.dto.BdSearchDto;
import com.abt.board.entity.SuBoard;
import com.abt.board.entity.QSuBoard;
import com.abt.common.Util;
import com.querydsl.core.QueryResults;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageImpl;


import javax.persistence.EntityManager;
import java.util.List;

import static com.abt.common.Util.isEmptyOrNull;


public class BoardRepositoryCustomImpl implements BoardRepositoryCustom {

    private JPAQueryFactory queryFactory;


    public BoardRepositoryCustomImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    private BooleanExpression searchSubjectLike(String searchInp){

        if (!isEmptyOrNull(searchInp)) {
            return QSuBoard.suBoard.subject.like("%" + searchInp + "%")
                    .or(QSuBoard.suBoard.content.like("%" + searchInp + "%"));
        }
        return null;
    }

    private BooleanExpression searchContentLike(String searchInp){

        if (!isEmptyOrNull(searchInp)) {
            return QSuBoard.suBoard.content.like("%" + searchInp + "%");
        }
        return null;
    }

    private BooleanExpression tableidEq(String tableId){

        if (!isEmptyOrNull(tableId)) {
            return QSuBoard.suBoard.tableId.eq(tableId);
        }
        return null;
    }

    @Override
    public Page<SuBoard> getBoardList(BdSearchDto bdSearchDto, Pageable pageable) {

        QueryResults<SuBoard> results = queryFactory
                .selectFrom(QSuBoard.suBoard)
                .where(QSuBoard.suBoard.status.eq("o"),
                        searchSubjectLike(bdSearchDto.searchInp),
                        tableidEq(bdSearchDto.tableId))
                .orderBy(QSuBoard.suBoard.no.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetchResults();

        List<SuBoard> content = results.getResults();
        long total = results.getTotal();

        return new PageImpl<>(content, pageable, total);
    }
}
