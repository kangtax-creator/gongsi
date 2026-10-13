/**
 * 🌟 전국 조정대상지역 지정/해제 연혁 데이터베이스 (2016.11 ~ 2026.07 최신 반영)
 * - 작성 기준: 국토교통부 조정대상지역 공고문
 * - 작동 원리: 주소 매칭 시 글자 수가 긴(구체적인 동/읍/면) 지역부터 우선 탐색하여 핀셋 규제를 완벽히 분리합니다.
 */

const regulationDB = [
    /* ====================================================
       1. 서울특별시 (25개 구 전역 개별 명시)
    ==================================================== */
    // 강남 3구 + 용산구 (지속 유지 지역)
    { region: "서울특별시 강남구", periods: [{start: "2016-11-03", end: "2999-12-31"}] },
    { region: "서울특별시 서초구", periods: [{start: "2016-11-03", end: "2999-12-31"}] },
    { region: "서울특별시 송파구", periods: [{start: "2016-11-03", end: "2999-12-31"}] },
    { region: "서울특별시 용산구", periods: [{start: "2016-11-03", end: "2999-12-31"}] },
    
    // 그 외 21개 구 (23.01 해제 후 25.10.16 효력발생 재지정)
    { region: "서울특별시 종로구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 중구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 성동구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 광진구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 동대문구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 중랑구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 성북구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 강북구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 도봉구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 노원구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 은평구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 서대문구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 마포구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 양천구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 강서구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 구로구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 금천구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 영등포구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 동작구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 관악구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "서울특별시 강동구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },

    /* ====================================================
       2. 경기도 - 주요 시/구 및 26년 신규 지정
    ==================================================== */
    { region: "경기도 과천시", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "경기도 광명시", periods: [{start: "2017-06-19", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "경기도 성남시 분당구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "경기도 성남시 수정구", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "경기도 성남시 중원구", periods: [{start: "2020-06-19", end: "2022-11-13"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "경기도 하남시", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "경기도 안양시 동안구", periods: [{start: "2018-08-28", end: "2022-11-13"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "경기도 안양시 만안구", periods: [{start: "2020-02-21", end: "2022-11-13"}] },
    { region: "경기도 의왕시", periods: [{start: "2020-02-21", end: "2022-11-13"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "경기도 용인시 수지구", periods: [{start: "2018-12-31", end: "2022-11-13"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "경기도 수원시 팔달구", periods: [{start: "2018-12-31", end: "2022-11-13"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "경기도 수원시 영통구", periods: [{start: "2020-02-21", end: "2022-11-13"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "경기도 수원시 장안구", periods: [{start: "2020-02-21", end: "2022-11-13"}, {start: "2025-10-16", end: "2999-12-31"}] },
    { region: "경기도 수원시 권선구", periods: [{start: "2020-02-21", end: "2022-11-13"}] },
    { region: "경기도 군포시", periods: [{start: "2020-06-19", end: "2022-11-13"}] },
    { region: "경기도 부천시", periods: [{start: "2020-06-19", end: "2022-11-13"}] },
    { region: "경기도 시흥시", periods: [{start: "2020-06-19", end: "2022-11-13"}] },
    { region: "경기도 오산시", periods: [{start: "2020-06-19", end: "2022-11-13"}] },
    { region: "경기도 평택시", periods: [{start: "2020-06-19", end: "2022-09-25"}] },
    { region: "경기도 의정부시", periods: [{start: "2020-06-19", end: "2022-11-13"}] },
    { region: "경기도 파주시", periods: [{start: "2020-12-18", end: "2022-11-13"}] },
    
    // 2026.07.01 신규 추가 지역
    { region: "경기도 구리시", periods: [{start: "2018-08-28", end: "2022-11-13"}, {start: "2026-07-01", end: "2999-12-31"}] },
    { region: "경기도 용인시 기흥구", periods: [{start: "2018-12-31", end: "2022-11-13"}, {start: "2026-07-01", end: "2999-12-31"}] },
    { region: "경기도 화성시 동탄구", periods: [{start: "2026-07-01", end: "2999-12-31"}] },

    /* ====================================================
       3. 경기도 - 동/읍/면 핀셋 규제 (매우 중요)
    ==================================================== */
    // 남양주
    { region: "경기도 남양주시 다산동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 남양주시 별내동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 남양주시", periods: [{start: "2016-11-03", end: "2019-11-07"}, {start: "2020-06-19", end: "2022-11-13"}] },
    // 고양
    { region: "경기도 고양시 삼송동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 고양시 원흥동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 고양시 향동동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 고양시 덕은동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 고양시 대화동", periods: [{start: "2016-11-03", end: "2022-11-13"}] }, // 킨텍스 1단계 포함
    { region: "경기도 고양시", periods: [{start: "2016-11-03", end: "2019-11-07"}, {start: "2020-06-19", end: "2022-11-13"}] },
    // 화성 (과거 동 단위 핀셋 규제 연혁 - 최신 '동탄구' 행정구역 반영 완벽판)
    { region: "경기도 화성시 동탄구 반송동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 동탄구 석우동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 동탄구 오산동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 동탄구 청계동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 동탄구 영천동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 동탄구 송동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 동탄구 산척동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 동탄구 목동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 동탄구 신동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 동탄구 장지동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    // (기존 명칭도 수기 입력 대비 유지)
    { region: "경기도 화성시 반송동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 석우동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 오산동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 청계동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 영천동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 송동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 산척동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 목동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 신동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시 장지동", periods: [{start: "2016-11-03", end: "2022-11-13"}] },
    { region: "경기도 화성시", periods: [{start: "2020-06-19", end: "2022-11-13"}] },
    
    // 기타 도농복합 외곽 핀셋
    { region: "경기도 안산시 단원구 대부동", periods: [] }, // 규제 제외 지역
    { region: "경기도 안산시 단원구", periods: [{start: "2020-06-19", end: "2022-11-13"}] },
    { region: "경기도 안산시 상록구", periods: [{start: "2020-06-19", end: "2022-11-13"}] },
    { region: "경기도 김포시 통진읍", periods: [] },
    { region: "경기도 김포시 월곶면", periods: [] },
    { region: "경기도 김포시 하성면", periods: [] },
    { region: "경기도 김포시 대곶면", periods: [] },
    { region: "경기도 김포시", periods: [{start: "2020-11-20", end: "2022-11-13"}] },

    /* ====================================================
       4. 인천, 세종 및 광역시/지방
    ==================================================== */
    { region: "세종특별자치시", periods: [{start: "2016-11-03", end: "2022-09-25"}] },
    { region: "인천광역시 강화군", periods: [] },
    { region: "인천광역시 옹진군", periods: [] },
    { region: "인천광역시", periods: [{start: "2020-06-19", end: "2022-09-25"}] },

    // 부산
    { region: "부산광역시 해운대구", periods: [{start: "2016-11-03", end: "2019-11-07"}, {start: "2020-11-20", end: "2022-09-25"}] },
    { region: "부산광역시 수영구", periods: [{start: "2016-11-03", end: "2019-11-07"}, {start: "2020-11-20", end: "2022-09-25"}] },
    { region: "부산광역시 동래구", periods: [{start: "2016-11-03", end: "2019-11-07"}, {start: "2020-11-20", end: "2022-09-25"}] },
    { region: "부산광역시 연제구", periods: [{start: "2016-11-03", end: "2018-12-31"}, {start: "2020-11-20", end: "2022-09-25"}] },
    { region: "부산광역시 남구", periods: [{start: "2016-11-03", end: "2018-12-31"}, {start: "2020-11-20", end: "2022-09-25"}] },
    { region: "부산광역시 부산진구", periods: [{start: "2017-06-19", end: "2018-12-31"}, {start: "2020-12-18", end: "2022-09-25"}] },
    { region: "부산광역시 기장군 일광면", periods: [{start: "2017-06-19", end: "2018-12-31"}] },
    { region: "부산광역시 서구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "부산광역시 동구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "부산광역시 영도구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "부산광역시 금정구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "부산광역시 북구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "부산광역시 강서구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "부산광역시 사상구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "부산광역시 사하구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },

    // 대구, 대전, 광주, 울산, 충남, 충북 등
    { region: "대구광역시 수성구", periods: [{start: "2020-11-20", end: "2022-07-04"}] }, 
    { region: "대구광역시", periods: [{start: "2020-12-18", end: "2022-07-04"}] },
    { region: "대전광역시", periods: [{start: "2020-06-19", end: "2022-09-25"}] },
    { region: "광주광역시", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "울산광역시 중구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "울산광역시 남구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "충청북도 청주시", periods: [{start: "2020-06-19", end: "2022-09-25"}] }, 
    { region: "충청남도 천안시 동남구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "충청남도 천안시 서북구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "충청남도 논산시", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "충청남도 공주시", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "전라북도 전주시", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "전라남도 여수시", periods: [{start: "2020-12-18", end: "2022-07-04"}] },
    { region: "전라남도 순천시", periods: [{start: "2020-12-18", end: "2022-07-04"}] },
    { region: "전라남도 광양시", periods: [{start: "2020-12-18", end: "2022-07-04"}] },
    { region: "경상북도 포항시 남구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },
    { region: "경상북도 경산시", periods: [{start: "2020-12-18", end: "2022-07-04"}] },
    { region: "경상남도 창원시 성산구", periods: [{start: "2020-12-18", end: "2022-09-25"}] },

    /* ====================================================
       🌟 [추가됨] 국토부 공고 각주 완벽 반영 (읍/면/동 핀셋 규제 제외 지역)
       - periods 배열을 비워두면 '평생 비규제 지역'으로 판별하여, 시/군 전체 규제를 무시하고 통과시킵니다.
    ==================================================== */
    
    // 경기도 지역 핀셋 제외
    { region: "경기도 남양주시 화도읍", periods: [] },
    { region: "경기도 남양주시 수동면", periods: [] },
    { region: "경기도 남양주시 조안면", periods: [] },
    { region: "경기도 화성시 서신면", periods: [] },
    { region: "경기도 안산시 단원구 대부동", periods: [] },
    { region: "경기도 안산시 단원구 대부남동", periods: [] },
    { region: "경기도 안산시 단원구 대부북동", periods: [] },
    { region: "경기도 안산시 단원구 선감동", periods: [] },
    { region: "경기도 안산시 단원구 풍도동", periods: [] },
    { region: "경기도 용인시 처인구 포곡읍", periods: [] },
    { region: "경기도 용인시 처인구 모현읍", periods: [] },
    { region: "경기도 용인시 처인구 백암면", periods: [] },
    { region: "경기도 용인시 처인구 양지면", periods: [] },
    { region: "경기도 용인시 처인구 원삼면", periods: [] }, 
    { region: "경기도 안성시 일죽면", periods: [] },
    { region: "경기도 안성시 죽산면", periods: [] },
    { region: "경기도 안성시 삼죽면", periods: [] },
    { region: "경기도 안성시 미양면", periods: [] },
    { region: "경기도 안성시 대덕면", periods: [] },
    { region: "경기도 안성시 양성면", periods: [] },
    { region: "경기도 안성시 고삼면", periods: [] },
    { region: "경기도 안성시 보개면", periods: [] },
    { region: "경기도 안성시 서운면", periods: [] },
    { region: "경기도 안성시 금광면", periods: [] },
    { region: "경기도 광주시 초월읍", periods: [] },
    { region: "경기도 광주시 곤지암읍", periods: [] },
    { region: "경기도 광주시 도척면", periods: [] },
    { region: "경기도 광주시 퇴촌면", periods: [] },
    { region: "경기도 광주시 남종면", periods: [] },
    { region: "경기도 광주시 남한산성면", periods: [] },
    { region: "경기도 양주시 백석읍", periods: [] },
    { region: "경기도 양주시 남면", periods: [] },
    { region: "경기도 양주시 광적면", periods: [] },
    { region: "경기도 양주시 은현면", periods: [] },
    { region: "경기도 김포시 통진읍", periods: [] },
    { region: "경기도 김포시 대곶면", periods: [] },
    { region: "경기도 김포시 월곶면", periods: [] },
    { region: "경기도 김포시 하성면", periods: [] },
    { region: "경기도 파주시 문산읍", periods: [] },
    { region: "경기도 파주시 파주읍", periods: [] },
    { region: "경기도 파주시 법원읍", periods: [] },
    { region: "경기도 파주시 조리읍", periods: [] },
    { region: "경기도 파주시 월롱면", periods: [] },
    { region: "경기도 파주시 탄현면", periods: [] },
    { region: "경기도 파주시 광탄면", periods: [] },
    { region: "경기도 파주시 파평면", periods: [] },
    { region: "경기도 파주시 적성면", periods: [] },
    { region: "경기도 파주시 군내면", periods: [] },
    { region: "경기도 파주시 장단면", periods: [] },
    { region: "경기도 파주시 진동면", periods: [] },
    { region: "경기도 파주시 진서면", periods: [] },
    { region: "경기도 동두천시 광암동", periods: [] },
    { region: "경기도 동두천시 걸산동", periods: [] },
    { region: "경기도 동두천시 안흥동", periods: [] },
    { region: "경기도 동두천시 상봉암동", periods: [] },
    { region: "경기도 동두천시 하봉암동", periods: [] },
    { region: "경기도 동두천시 탑동동", periods: [] },

    // 인천광역시 핀셋 제외
    { region: "인천광역시 중구 을왕동", periods: [] },
    { region: "인천광역시 중구 남북동", periods: [] },
    { region: "인천광역시 중구 덕교동", periods: [] },
    { region: "인천광역시 중구 무의동", periods: [] },

    // 충청북도 청주시 핀셋 제외 (구 단위 명시)
    { region: "충청북도 청주시 상당구 낭성면", periods: [] },
    { region: "충청북도 청주시 상당구 미원면", periods: [] },
    { region: "충청북도 청주시 상당구 가덕면", periods: [] },
    { region: "충청북도 청주시 상당구 남일면", periods: [] },
    { region: "충청북도 청주시 상당구 문의면", periods: [] },
    { region: "충청북도 청주시 서원구 남이면", periods: [] },
    { region: "충청북도 청주시 서원구 현도면", periods: [] },
    { region: "충청북도 청주시 흥덕구 강내면", periods: [] },
    { region: "충청북도 청주시 흥덕구 옥산면", periods: [] },
    { region: "충청북도 청주시 청원구 내수읍", periods: [] },
    { region: "충청북도 청주시 청원구 북이면", periods: [] },

    // 충청남도 천안시 핀셋 제외 (구 단위 명시)
    { region: "충청남도 천안시 동남구 목천읍", periods: [] },
    { region: "충청남도 천안시 동남구 풍세면", periods: [] },
    { region: "충청남도 천안시 동남구 광덕면", periods: [] },
    { region: "충청남도 천안시 동남구 북면", periods: [] },
    { region: "충청남도 천안시 동남구 성남면", periods: [] },
    { region: "충청남도 천안시 동남구 수신면", periods: [] },
    { region: "충청남도 천안시 동남구 병천면", periods: [] },
    { region: "충청남도 천안시 동남구 동면", periods: [] },
    { region: "충청남도 천안시 서북구 성환읍", periods: [] },
    { region: "충청남도 천안시 서북구 성거읍", periods: [] },
    { region: "충청남도 천안시 서북구 직산읍", periods: [] },
    { region: "충청남도 천안시 서북구 입장면", periods: [] },

    // (논산, 공주는 구가 없으므로 기존 유지)
    { region: "충청남도 논산시 강경읍", periods: [] },
    { region: "충청남도 논산시 연무읍", periods: [] },
    { region: "충청남도 논산시 성동면", periods: [] },
    { region: "충청남도 논산시 광석면", periods: [] },
    { region: "충청남도 논산시 노성면", periods: [] },
    { region: "충청남도 논산시 상월면", periods: [] },
    { region: "충청남도 논산시 부적면", periods: [] },
    { region: "충청남도 논산시 연산면", periods: [] },
    { region: "충청남도 논산시 벌곡면", periods: [] },
    { region: "충청남도 논산시 양촌면", periods: [] },
    { region: "충청남도 논산시 가야곡면", periods: [] },
    { region: "충청남도 논산시 은진면", periods: [] },
    { region: "충청남도 논산시 채운면", periods: [] },
    { region: "충청남도 공주시 유구읍", periods: [] },
    { region: "충청남도 공주시 이인면", periods: [] },
    { region: "충청남도 공주시 탄천면", periods: [] },
    { region: "충청남도 공주시 계룡면", periods: [] },
    { region: "충청남도 공주시 반포면", periods: [] },
    { region: "충청남도 공주시 의당면", periods: [] },
    { region: "충청남도 공주시 정안면", periods: [] },
    { region: "충청남도 공주시 우성면", periods: [] },
    { region: "충청남도 공주시 사곡면", periods: [] },
    { region: "충청남도 공주시 신풍면", periods: [] },

    // 경상북도 포항시 핀셋 제외 (구 단위 명시)
    { region: "경상북도 포항시 남구 구룡포읍", periods: [] },
    { region: "경상북도 포항시 남구 연일읍", periods: [] },
    { region: "경상북도 포항시 남구 오천읍", periods: [] },
    { region: "경상북도 포항시 남구 대송면", periods: [] },
    { region: "경상북도 포항시 남구 동해면", periods: [] },
    { region: "경상북도 포항시 남구 장기면", periods: [] },
    { region: "경상북도 포항시 남구 호미곶면", periods: [] }
];

/**
 * 🌟 [핵심] 글자 수가 긴(구체적인) 주소부터 매칭되도록 배열을 초기 정렬합니다.
 * 이 한 줄 덕분에 '남양주시 다산동'이 '남양주시'보다 먼저 평가되어 핀셋 규제가 완벽히 작동합니다.
 */
const sortedRegulationDB = [...regulationDB].sort((a, b) => b.region.length - a.region.length);


/**
 * 🌟 규제 여부 판별 엔진 함수
 * @param {string} fullAddress - 대상 물건의 전체 지번/도로명 주소 (예: "경기도 남양주시 다산동 123")
 * @param {string} acqDateStr - 취득일 문자열 (예: "2021-05-15")
 * @returns {object} { isRegulated: boolean, startDate: string|null, targetRegionName: string|null }
 */
function checkRegulationStatus(fullAddress, acqDateStr) {
    if (!fullAddress || !acqDateStr) {
        return { isRegulated: false, startDate: null, targetRegionName: null, error: true };
    }

    const acqDate = new Date(acqDateStr);
    const lawDate = new Date("2017-08-03"); // 8.2 대책 시행일 (거주요건 적용 기준일)

    // 1. 대원칙: 2017년 8월 2일 이전 취득은 무조건 거주요건 면제
    if (acqDate < lawDate) {
        return { isRegulated: false, startDate: null, targetRegionName: null, isBeforeLaw: true };
    }

    // 2. 지역 매칭 및 규제 기간 확인
    for (let reg of sortedRegulationDB) {
        // 주소 안에 해당 지역 문자열이 포함되어 있는지 확인 (예: "다산동" 매칭)
        if (fullAddress.includes(reg.region)) {
            // 구체적인 지역을 찾았으므로 해당 지역의 기간만 반복 대조
            for (let p of reg.periods) {
                let sDate = new Date(p.start);
                let eDate = new Date(p.end);
                
                // 취득일이 지정~해제 기간 사이에 포함되면 규제 확정
                if (acqDate >= sDate && acqDate <= eDate) {
                    return {
                        isRegulated: true,
                        startDate: p.start,
                        targetRegionName: reg.region
                    };
                }
            }
            // 🚨 핵심 로직: 일치하는 지역명(예: 다산동)을 찾았으나, 날짜가 포함되지 않았다면
            // 더 넓은 지역(예: 남양주시)으로 넘어가지 않고 여기서 탐색을 즉시 종료합니다.
            return {
                isRegulated: false,
                startDate: null,
                targetRegionName: reg.region
            };
        }
    }

    // 어떤 지역에도 매칭되지 않은 경우 (평생 비규제 지역)
    return {
        isRegulated: false,
        startDate: null,
        targetRegionName: null
    };
}

// 🌟 실거주 요건 판별 엔진 (외부 호출용)
window.checkRegulationStatus = function(fullAddress, acqDateInput) {
    if (!fullAddress || !acqDateInput) return { error: true };

    // 🌟 1. 주소 자동 치환 및 신규 행정구역(특별자치도) 완벽 호환
    let normAddress = fullAddress
        .replace(/^서울\s/, "서울특별시 ")
        .replace(/^경기\s/, "경기도 ")
        .replace(/^인천\s/, "인천광역시 ")
        .replace(/^부산\s/, "부산광역시 ")
        .replace(/^대구\s/, "대구광역시 ")
        .replace(/^대전\s/, "대전광역시 ")
        .replace(/^광주\s/, "광주광역시 ")
        .replace(/^울산\s/, "울산광역시 ")
        .replace(/^세종\s/, "세종특별자치시 ")
        .replace(/^세종시\s/, "세종특별자치시 ")
        .replace(/^경북\s/, "경상북도 ")
        .replace(/^경남\s/, "경상남도 ")
        .replace(/^전북\s/, "전라북도 ")
        .replace(/^전남\s/, "전라남도 ")
        .replace(/^충북\s/, "충청북도 ")
        .replace(/^충남\s/, "충청남도 ")
        .replace(/^강원\s/, "강원도 ")
        .replace(/^제주\s/, "제주특별자치도 ")
        .replace(/전북특별자치도/, "전라북도")  // 신규 행정구역 -> 구 명칭으로 맵핑
        .replace(/강원특별자치도/, "강원도");   // 신규 행정구역 -> 구 명칭으로 맵핑

    // 🚨 2. [안전망] 광역지자체(시/도) 명칭이 정확히 존재하는지 검증
    const validSido = [
        "서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "대전광역시", "울산광역시", "세종특별자치시", 
        "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주특별자치도"
    ];
    
    let isValidFormat = validSido.some(sido => normAddress.includes(sido));
    
    // 시/도 명칭이 없으면 행정구역 개편이나 오타로 간주하여 수동 검토(isUnknown) 반환
    if (!isValidFormat) {
        return { isUnknown: true };
    }

    const acqDate = new Date(acqDateInput);
    const lawDate = new Date("2017-08-03"); 

    // 1. 대원칙: 17.08.02 이전 취득 무조건 면제
    if (acqDate < lawDate) {
        return { error: false, isBeforeLaw: true, isRegulated: false };
    }

    // 2. 글자수가 긴 구체적 주소(동 단위)부터 탐색하도록 정렬
    const sortedDB = [...regulationDB].sort((a, b) => b.region.length - a.region.length);

    let isRegulated = false;
    let matchedPeriod = null;
    let targetRegionName = "";

    // 3. 교정된 주소(normAddress)로 대조
    for (let reg of sortedDB) {
        if (normAddress.includes(reg.region)) {
            for (let p of reg.periods) {
                let sDate = new Date(p.start);
                let eDate = new Date(p.end);
                if (acqDate >= sDate && acqDate <= eDate) {
                    isRegulated = true;
                    matchedPeriod = p.start;
                    targetRegionName = reg.region;
                    break;
                }
            }
            // 매칭되는 지역을 찾았으면 하위 지역으로 넘어가지 않음
            break; 
        }
    }

    return {
        error: false,
        isBeforeLaw: false,
        isRegulated: isRegulated,
        targetRegionName: targetRegionName,
        startDate: matchedPeriod
    };
};

// 🌟 특정 주소의 규제/해제 연혁 전체 조회 엔진
window.getRegionHistory = function(fullAddress) {
    if (!fullAddress) return null;
    let normAddress = fullAddress
        .replace(/^서울\s/, "서울특별시 ").replace(/^경기\s/, "경기도 ")
        .replace(/^인천\s/, "인천광역시 ").replace(/^부산\s/, "부산광역시 ")
        .replace(/^대구\s/, "대구광역시 ").replace(/^대전\s/, "대전광역시 ")
        .replace(/^광주\s/, "광주광역시 ").replace(/^울산\s/, "울산광역시 ")
        .replace(/^세종\s/, "세종특별자치시 ").replace(/^경북\s/, "경상북도 ")
        .replace(/^경남\s/, "경상남도 ").replace(/^전북\s/, "전라북도 ")
        .replace(/^전남\s/, "전라남도 ").replace(/^충북\s/, "충청북도 ")
        .replace(/^충남\s/, "충청남도 ").replace(/^강원\s/, "강원도 ")
        .replace(/^제주\s/, "제주특별자치도 ");

    for (let reg of sortedRegulationDB) {
        if (normAddress.includes(reg.region)) {
            return { regionName: reg.region, periods: reg.periods };
        }
    }
    return null;
};

// 🌟 특정 날짜 기준 전국 규제지역 스냅샷 조회 엔진
window.getNationalSnapshot = function(dateStr) {
    if (!dateStr) return [];
    const targetDate = new Date(dateStr);
    let snapshot = [];

    for (let reg of sortedRegulationDB) {
        // periods가 비어있는 핀셋 제외 구역은 목록에서 스킵 (규제지역이 아니므로)
        if (!reg.periods || reg.periods.length === 0) continue; 
        
        let isReg = false;
        for (let p of reg.periods) {
            let sDate = new Date(p.start);
            let eDate = new Date(p.end);
            if (targetDate >= sDate && targetDate <= eDate) {
                isReg = true;
                break;
            }
        }
        if (isReg) {
            snapshot.push(reg.region);
        }
    }
    
    // 긴 주소(핀셋 규제 등)로 정렬된 것을 다시 광역시/도 기준으로 예쁘게 가나다 정렬
    return snapshot.sort();
};
