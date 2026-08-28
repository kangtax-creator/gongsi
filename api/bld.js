export default async function handler(req, res) {
    // 1. 프론트엔드에서 쿼리 파라미터로 넘겨준 원본 국토부 API URL을 받습니다.
    const targetUrl = req.query.url;

    if (!targetUrl) {
        return res.status(400).json({ error: "URL 파라미터가 누락되었습니다." });
    }

    try {
        // 2. Vercel 서버가 대신 국토부 서버로 데이터를 요청합니다 (CORS 에러 발생 안 함!)
        const response = await fetch(targetUrl);
        
        // 3. 국토부 서버가 에러를 뱉으면 우리도 에러 처리
        if (!response.ok) {
            throw new Error(`국토부 서버 응답 오류: ${response.status}`);
        }

        // 4. 정상적으로 받은 데이터를 JSON으로 파싱합니다.
        const data = await response.json();
        
        // 5. 프론트엔드(브라우저)로 데이터를 고스란히 전달합니다.
        res.status(200).json(data);
        
    } catch (error) {
        console.error("건축물대장 전용 라우터 에러:", error);
        res.status(500).json({ error: "서버 내부 통신 오류가 발생했습니다." });
    }
}
