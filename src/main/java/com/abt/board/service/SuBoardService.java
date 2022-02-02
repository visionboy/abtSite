package com.abt.board.service;

import java.math.BigDecimal;
import java.util.List;

import com.abt.board.dto.BdSearchDto;
import com.abt.board.entity.SuBoard;
import com.abt.board.repository.BoardRepository;
import com.abt.board.repository.SuBdRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;


@Service
@RequiredArgsConstructor
public class SuBoardService {
	

	private final SuBdRepository suBdRepository;

	private final BoardRepository boardRepository;
	
	public Page<SuBoard> getList(Pageable pageable,String tb_id) {
		
		int page = (pageable.getPageNumber() == 0) ? 0 : (pageable.getPageNumber() - 1);
        pageable = PageRequest.of(page, 5, Sort.by(Sort.Direction.DESC, "no"));


        if (tb_id.equals("")) {
			return suBdRepository.findByStatus("o",pageable);
        } else {
        	return suBdRepository.findByStatusAndTableId("o",tb_id, pageable);
        }
		 
	}
	
	public List<BdCountInterface> getBdCount() {
		return suBdRepository.findGroupByReportWithNativeQuery();
	}

	public BigDecimal getBdTotalCount() {
		BdCountInterface getTotalCount = suBdRepository.findTotalCountWithNativeQuery();
		return getTotalCount.getCount();
	}

	@Transactional(readOnly = true)
	public Page<SuBoard> getBoardPageList(BdSearchDto bdSearchDto, Pageable pageable){
		return boardRepository.getBoardList(bdSearchDto, pageable);
	}

	@Transactional(readOnly = true)
	public SuBoard getItemDetail(Long no){
		return suBdRepository.findById(no)
				.orElseThrow(EntityNotFoundException::new);
	}

}
