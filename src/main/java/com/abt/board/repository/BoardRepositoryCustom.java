package com.abt.board.repository;

import com.abt.board.dto.BdSearchDto;
import com.abt.board.entity.SuBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface BoardRepositoryCustom {

    Page<SuBoard> getBoardList(BdSearchDto bdSearchDto, Pageable pageable);

}
