package com.abt.board.repository;

import java.util.List;

import com.abt.board.entity.SuBoard;
import com.abt.board.service.BdCountInterface;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface SuBdRepository extends JpaRepository<SuBoard, Long> {
	 
	 Page<SuBoard> findByStatus(String status,Pageable pageable);

		 Page<SuBoard> findByStatusAndTableId(String status,String tb_id,Pageable pageable);
	 /*
	 Page<SuBoard> findByStatusAndTableIdAnd(String status,String tb_id,Pageable pageable);
	 */

	 @Query(value =
        "SELECT "+
            " table_id tableId,count(*) count " +
            "FROM su_board " +
            "WHERE status='o' " +
            "GROUP BY table_id "
        , nativeQuery = true
			 )
	 List<BdCountInterface> findGroupByReportWithNativeQuery();

	 @Query(value =
        "SELECT "+
            " 'totalCount' tableId ,count(*) count " +
            "FROM su_board " +
            "WHERE status='o' " 
        , nativeQuery = true
			 )
	 BdCountInterface findTotalCountWithNativeQuery();

}
