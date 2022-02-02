//
//  main.m
//  myFirstGame
//
//  Created by 알버트 on 2015. 3. 28..
//  Copyright (c) 2015년 ___albert___. All rights reserved.
//
//  만들면서 궁금한점
//  1. scanf 사용시 숫자인지 영문인지 한글인지 validation 체크를 하여 잘못된 항목입력시 잘못됐다는 메세지를 출력후 다시 입력하도록 하도록 할 필요있음
//  2. 콘솔창 clear 기능 추가하고 싶은데 생각처럼 잘 않됨
//  3. 배운 내용으로 복습차원으로 하여서 소스코드가 길어졋습니다. 양해 부탁드립니다.


#import <Foundation/Foundation.h>

#include <stdlib.h>

//shuffled. h 파일로 분리 필요
@interface NSArray (Helpers)

- (NSArray *) shuffled;

@end

@implementation NSArray (Helpers)

- (NSArray *) shuffled
{
    NSMutableArray *tmpArray = [NSMutableArray arrayWithCapacity:[self count]];
    
    for (id anObject in self)
    {
        NSUInteger randomPos = arc4random()%([tmpArray count]+1);
        [tmpArray insertObject:anObject atIndex:randomPos];
    }
    
    return [NSArray arrayWithArray:tmpArray];  // non-mutable autoreleased copy
}

@end

#define lines printf("==============================================\n");

void gaweBaweBo();

void Sadari();

NSString* checkWinner(int you,int computer);

NSString* getGaweBaweBoName(int value);

int youWin=0,comWin=0;

int main() { // 메뉴판
    
    int ChoiceGame;
    
    lines
    
    printf("허접한 게임을 플레이하여 주셔서 감사합니다. \n1번 가위바위보 게임\n2번 사다리타기 게임\n게임번호입력(숫자만입력ㅜㅜ):");
    
    scanf("%d", &ChoiceGame);
    
    if (ChoiceGame==1) { // 가위바위보 게임 시작
        
        system("clear"); // 먹히지않음 ㅜㅜ

        while ((youWin+comWin)<3) { // 3판2승
            
            gaweBaweBo();
            
        }
        
        lines
        
        if (youWin>comWin) {

            printf("당신은 %d번승리 컴퓨터는 %d승리 최종결과는 당신의 승리입니다.\n",youWin,comWin);
            
        } else {
            
            printf("당신은 %d번승리 컴퓨터는 %d승리 최종결과는 당신의 패배입니다.\n",youWin,comWin);
            
        }
        
    } else if (ChoiceGame==2) { // 사다리타기
        
        system("clear"); // 먹히지않음 ㅜㅜ
        
        Sadari();
        
    } else {
        
        printf("관련된 게임이 없습니다.\n");
    
    }
    
    lines
    
    printf("허접한 게임을 플레이하여 주셔서 감사합니다.\n빠이빠이~~~\n");

    lines
    
}


// 가위바위보 메인
void gaweBaweBo() {
    
    int gaweBaweBo,comPuter;
    
    NSString* result;
    
    lines
    
    printf("가위바위보 1.가위 2.바위 3.보 중 선택하여 입력하여 주세요\n선택하여주세요^^:");
    
    scanf("%d", &gaweBaweBo);
    
    if (gaweBaweBo==1 || gaweBaweBo==2 || gaweBaweBo==3) {
        
        comPuter = arc4random() % 3+1;
        
        result = checkWinner( gaweBaweBo,comPuter);
        
        printf("당신이 선택한 항목은 %s\n상대가 컴퓨터가 낸항목은 %s\n결과:%s\n",
               [getGaweBaweBoName(gaweBaweBo) UTF8String],
               [getGaweBaweBoName(comPuter) UTF8String],
               [result UTF8String]);
        
    } else {
        
        printf("정확한 값을 입력하여 주세요.(1,2,3번만 입력하여주세요!)\n");
        
    }
    
}

// 승무패 확인함수
NSString* checkWinner(int you,int computer) {
    
    //1 가위
    //2 바위
    //3 보
    
    if ((you == 1 && computer == 3) || (you == 2 && computer == 1) || (you == 3 && computer == 2)) {
        youWin++;
        return @"승리^^";
        
    } else if (you == computer) {
        
        return @"쌤쌤=..=";
        
    } else {
        comWin++;
        return @"실패ㅜ.ㅜ";
        
    }
    
};

// 가위바위보 이름값 가져오기함수
NSString* getGaweBaweBoName(int value) {
    
    NSString* result;
    
    if (value==1 || value==2 || value==3) {
        
        NSArray *gaweBaweBo = @[@"가위", @"바위", @"보"];
        
        result =gaweBaweBo[value-1];
        
    } else {
        
        result = [NSString stringWithFormat:@"%i", value];
        
    }
    
    return result;
}

void Sadari() {

    NSArray *arrShuffled = [[NSArray arrayWithObjects: nil] shuffled];
    
    int memberCount;
    
    lines
    
    printf("사다리게임에 참여할 인원수를 입력하여 주세요^^ \n참석인원수(숫자만) :");
    
    scanf("%d", &memberCount);
    
    lines
    
    NSMutableArray *arrsMember = [[NSMutableArray alloc] initWithCapacity:memberCount];
    
    for (int i = 0; i < memberCount; i++)
    {
        
        char buf[100];
        
        printf("%d번째 참석인원 이름(영문만 가능ㅜㅜ):",i+1);
        
        scanf("%s", buf);
        
        NSString *str = [NSString stringWithCString:buf encoding:NSASCIIStringEncoding];
        
        [arrsMember addObject:str];
        
    }
    
    lines
    
    NSMutableArray *arrDangcem = [[NSMutableArray alloc] initWithCapacity:memberCount];
    
    for (int i = 0; i < memberCount; i++)
    {
        
        char buf[100];
        
        printf("%d번째 당첨금액(숫자만):",i+1);
        
        scanf("%s", buf);
        
        NSString *str = [NSString stringWithCString:buf encoding:NSASCIIStringEncoding];
        
        [arrDangcem addObject:str];
        
    }
    
    lines
    
    // 사다리 타기시작 믹스중 ...
    arrShuffled = [arrDangcem shuffled];
    
    for (int i=0;i<memberCount;i++) {
        
        printf("당첨결과: %s분은 %s원 담첨\n",[[arrsMember objectAtIndex: i] UTF8String],[[arrShuffled objectAtIndex: i]UTF8String]);
        
    }

}
