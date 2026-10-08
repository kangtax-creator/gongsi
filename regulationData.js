/**
 * 🌟 전국 조정대상지역 지정/해제 연혁 데이터베이스 (2016.11 ~ 2026.07 최신 반영)
 * - 작성 기준: 국토교통부 조정대상지역 공고문
 * - 작동 원리: 주소 매칭 시 글자 수가 긴(구체적인 동/읍/면) 지역부터 우선 탐색하여 핀셋 규제를 완벽히 분리합니다.
 */

const regulationDB = [
    /* ====================================================
       1. 서울특별시 (25개 구)
    ==================================================== */
    // 강남 3구 + 용산 (지속 유지)
    { region: "서울특별시 강남구", periods: [{start: "2016-11-03", end: "2999-12-31"}] },
    { region: "서울특별시 서초구", periods: [{start: "2016-11-03", end: "2999-12-31"}] },
    { region: "서울특별시 송파구", periods: [{start: "2016-11-03", end: "2999-12-31"}] },
    { region: "서울특별시 용산구", periods: [{start: "2016-11-03", end: "2999-12-31"}] },
    // 서울 그 외 21개 구 (23.01 해제 후 25.10.16 효력발생 재지정)
    { region: "서울특별시", periods: [{start: "2016-11-03", end: "2023-01-04"}, {start: "2025-10-16", end: "2999-12-31"}] },

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
    // 화성 (과거 동 단위 핀셋 규제 연혁 - 과거 취득자 판별용)
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
    { region: "경상남도 창원시 성산구", periods: [{start: "2020-12-18", end: "2022-09-25"}] }
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

    // 🌟 [핵심 버그 픽스] 카카오 API의 줄임말(경기)을 DB의 정식명칭(경기도)으로 자동 치환
    let normAddress = fullAddress
        .replace(/^서울\s/, "서울특별시 ")
        .replace(/^경기\s/, "경기도 ")
        .replace(/^인천\s/, "인천광역시 ")
        .replace(/^부산\s/, "부산광역시 ")
        .replace(/^대구\s/, "대구광역시 ")
        .replace(/^대전\s/, "대전광역시 ")
        .replace(/^광주\s/, "광주광역시 ")
        .replace(/^울산\s/, "울산광역시 ")
        .replace(/^세종\s/, "세종특별자치시 ");

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
