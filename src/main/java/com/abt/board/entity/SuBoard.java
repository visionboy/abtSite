package com.abt.board.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Entity
@Data
@Table(name = "su_board")
public class SuBoard {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long no;
	
	@Column(length=100)
	public String subject;
	
	@Lob 
	public String content;
	
	@Column(length=30)
	public int hit;
	
	@Column
	@JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss", timezone="Asia/Seoul")
	public LocalDateTime pubDate;

	@Column
	public LocalDateTime lastEditeDate;
	
	@Column(length=30)
	public String writerId;
	
	@Column(length=30)
	public String ip;
	
	@Column
	public int comment;
	
	@Column
	public int memo;
	
	@Column(length=2)
	public String status;
	
	@Column(length=20)
	public String tableId;

	@Lob
	public String Answer;

	@Column(length=100)
	public String imgname;
	
	@Column(length=30)
	public String pw;
	
	@Column(length=2)
	public String qaType;
	
	@Column(length=2)
	public String qaType1;

	@Column(length=50)
	public String qaCom;
	
	@Column(length=20)
	public String qaName;

	@Column(length=20)
	public String qaPhone;
	
	@Column(length=20)
	public String qaMobile;

	@Column(length=40)
	public String qaEmail;
	
	@Column(length=30)
	public String qaDate;
	
	@Column(length=50)
	public String imgname2;
	
}
