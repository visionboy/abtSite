package com.abt.board.repository;

import com.abt.board.entity.SuBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface BoardRepository extends JpaRepository<SuBoard,Long>, QuerydslPredicateExecutor<SuBoard>,BoardRepositoryCustom {

}
