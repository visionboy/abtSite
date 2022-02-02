package com.abt.board.controller;

import java.util.List;
import java.util.Optional;

import com.abt.board.dto.BdSearchDto;
import com.abt.board.entity.SuBoard;
import com.abt.board.service.BdCountInterface;
import com.abt.board.service.SuBoardService;
import com.abt.common.FileDownload;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import static com.abt.common.Util.cutString;
import static com.abt.common.Util.removeTag;

@Controller
@RequiredArgsConstructor
public class BoardController {

    @Value("${dwPath}")
    public String dwPath;

    private final SuBoardService suBdService;

    @GetMapping(value = "/")
    public String main(Model model) throws Exception {
        return "main";
    }
    /*
    @GetMapping(value = {"/main/board.php","/"})
    public ModelAndView getBoardView(
            @PageableDefault(size = 5, sort = "no", direction = Sort.Direction.DESC) Pageable pageable,
            @RequestParam(value="tb_id",defaultValue="") String tb_id,
            @RequestParam(value="searinp",defaultValue="") String searinp ) throws Exception {
        ModelAndView mav = new ModelAndView("board");
        Page<SuBoard> lst = suBdService.getList(pageable,tb_id);

        for (SuBoard s : lst.getContent()) {
            s.content = cutString(removeTag(s.content), 300);
            System.out.println(s);
        }

        int totalPages = lst.getTotalPages();

        List<BdCountInterface> cntGroup = suBdService.getBdCount();

        // count 값 넣어주기
        for (BdCountInterface item : cntGroup) {
            System.out.println(item.getTableId()+":"+item.getCount());
            mav.addObject(item.getTableId(), "("+item.getCount()+")");
        }

        mav.addObject("list", lst);
        mav.addObject("tb_id", tb_id);
        mav.addObject("searinp", searinp);
        mav.addObject("totalPages", totalPages);
        mav.addObject("totalCount", suBdService.getBdTotalCount()+"PERSON");
        return mav;

    }*/

    @GetMapping(value = {"/board/list", "/board/list/{page}"})
    public String boardList(BdSearchDto searchDto, @PathVariable("page") Optional<Integer> page, Model model) throws Exception {

        Pageable pageable = PageRequest.of(page.isPresent() ? page.get() : 0, 5);

        Page<SuBoard> items = suBdService.getBoardPageList(searchDto, pageable);

        for (SuBoard s : items.getContent()) {
            s.content = cutString(removeTag(s.content), 300);
            System.out.println(s);
        }

        List<BdCountInterface> cntGroup = suBdService.getBdCount();

        // count 값 넣어주기
        for (BdCountInterface item : cntGroup) {
            model.addAttribute(item.getTableId(), "("+item.getCount()+")");
        }

        model.addAttribute("tableId", searchDto.tableId);
        model.addAttribute("searchInp", searchDto.searchInp);
        model.addAttribute("items", items);
        model.addAttribute("itemSearchDto", searchDto);
        model.addAttribute("maxPage", 5);
        model.addAttribute("viewKeywords","visionboy,VISIONBOY,이성,리성,ALBERT,Abert,웹프로그래밍,웹표준,웹접근성,oracle");
        model.addAttribute("viewDescription",",visionboy이성(visionboy) 개인홈페이지 입니다.");
        model.addAttribute("title","Welcome to albert site");
        model.addAttribute("totalCount", suBdService.getBdTotalCount()+"PERSON");

        return "board";
    }

    @GetMapping(value = "/board/{no}")
    public String boardView(Model model, @PathVariable("no") Long itemId){
        SuBoard item = suBdService.getItemDetail(itemId);
        item.setContent(item.content.replaceAll("\"fupload/","\"/fupload/"));

        item.setImgname(item.imgname.isEmpty() ? "emp" : item.imgname);
        List<BdCountInterface> cntGroup = suBdService.getBdCount();

        // count 값 넣어주기
        for (BdCountInterface gitem : cntGroup) {
            model.addAttribute(gitem.getTableId(), "("+gitem.getCount()+")");
        }


        model.addAttribute("viewKeywords",item.subject+",visionboy,VISIONBOY,이성,리성,ALBERT,Abert,웹프로그래밍,웹표준,웹접근성,oracle");
        model.addAttribute("viewDescription",item.subject+",visionboy이성(visionboy) 개인홈페이지 입니다.");
        model.addAttribute("title",item.subject);
        model.addAttribute("item", item);
        model.addAttribute("totalCount", suBdService.getBdTotalCount()+"PERSON");
        return "boardView";
    }

    @GetMapping(value = "/fdw")
    public  void fileDownload(
            @RequestParam("fname") String fname,@RequestParam("fname2") String fname2
            , HttpSession session, HttpServletRequest req, HttpServletResponse res , Model model) throws Throwable
    {
        try {

            String FileUrl = dwPath;
            FileDownload fileDown = new FileDownload(); //파일다운로드 객체생성
            fileDown.filDown(req, res, FileUrl + "/" , fname2, fname); //파일다운로드

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
