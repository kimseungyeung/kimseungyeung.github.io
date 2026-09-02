// Periods and project assignments sourced directly from portfolio PPT (2026-05-21).

import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'swalabi',
    company: '스왈라비',
    period: '2024.06 ~ 2026.03',
    position: 'Mobile Developer (Android)',
    description:
      '모바일 헬스케어 및 소셜 플랫폼 WalkOn Android 앱 개발 담당. XML/Volley/MVC 레거시 구조를 Jetpack Compose/Retrofit/MVVM으로 전환하는 대규모 리팩토링 수행. 실 사용자 대상 서비스 크래시 대응 및 UX 개선.',
    projectIds: ['walkon'],
    techStack: ['Kotlin', 'MVVM', 'Jetpack Compose', 'Firebase', 'Retrofit', 'Volley', 'LiveData', 'Room DB'],
  },
  {
    id: 'impact-company',
    company: '임팩트컴퍼니',
    period: '2020.08 ~ 2023.11 · 3년 4개월',
    position: 'Android / iOS Developer',
    description:
      'Android Native, iOS Native, WebView 앱 다수 개발. XM 차량용 하드웨어 런처(Serial RS232, HDMI, DMB), 소셜·커뮤니티·쇼핑·의료 등 다양한 도메인의 앱 개발 경험. Socket.IO, 인앱결제, 소셜 로그인, 카메라 등 주요 기능 구현.',
    projectIds: [
      'supercar-lounge',
      'xm-launcher',
      'gco',
      'hunhun-susan',
      'suntek-elective',
      'ok-realestate',
      'trade-house',
      'abys',
      'hansung-truck',
      'organic-itda',
      'dental-light',
      'ttr',
      'mission',
    ],
    techStack: ['Kotlin', 'Java', 'Swift', 'SwiftUI', 'MVVM', 'MVC', 'DataBinding', 'Firebase', 'Retrofit', 'Alamofire', 'Socket.IO', 'Serial RS232'],
  },
  {
    id: 'haidayz',
    company: '하이데이즈',
    period: '2019.03 ~ 2020.04 · 1년 2개월',
    position: 'Android / SpringBoot Developer',
    description:
      'Android 사내 앱 개발 및 Spring Boot 기반 보험 통계 시스템 개발. DL4J 딥러닝 라이브러리를 활용한 사고이력 분석 기능 구현. ESB 연동 및 서버 Controller 수정 작업.',
    projectIds: ['db-accident', 'hk-rcube', 'hk-rcube-poc'],
    techStack: ['Java', 'MVC', 'HttpConnection', 'Spring', 'Spring Boot', 'Thymeleaf', 'Deep Learning', 'DL4J'],
  },
  {
    id: 'geosystem',
    company: '지오시스템',
    period: '2016.12 ~ 2018.04 · 1년 5개월',
    position: 'Android Developer',
    description:
      '측량 전문 Android 앱 개발. Trimble / Spectra GNSS 장비와 Bluetooth 연동을 통한 정밀 위치 데이터 처리 및 도면 표시.',
    projectIds: ['smarttopo2018'],
    techStack: ['Java', 'MVC', 'Bluetooth', 'GNSS', 'Trimble Library'],
  },
];
