<template>
    <div class="testbed">
        <div class="testbed-intro">
            <div class="testbed-intro__title">SERVICE</div>
            <div class="testbed-intro__subtitle">시흥시가 진행 중인 다섯가지 핵심 비즈니스</div>
        </div>

        <div class="testbed-content">
            <div class="testbed-content__column">
                <div class="testbed-content__column-img">
                    <img src="../assets/img/art.png">
                </div>
                <div class="testbed-content__column-title">Smart<br>Environment</div>
                <div class="testbed-content__column-description">
                    라이더 스캐닝을 이용한 <br> 미세먼지 모니터링 시스템
                </div>
                <div class="testbed-content__column-go">GO</div>
            </div>
            <div class="testbed-content__column">
                <div class="testbed-content__column-img">
                    <img src="../assets/img/art.png">
                </div>
                <div class="testbed-content__column-title">Smart<br>Kindergarten</div>
                <div class="testbed-content__column-description">
                    스마트 어린이집 <br> 모델 개발 및 실증
                </div>
                <div class="testbed-content__column-go">GO</div>
            </div>
            <div class="testbed-content__column">
                <div class="testbed-content__column-img">
                    <img src="../assets/img/art.png">
                </div>
                <div class="testbed-content__column-title">Smart<br>Culture & Art</div>
                <div class="testbed-content__column-description">
                    빅데이터 기반 <br> 예술 융복합 <br> AI 서비스 개발
                </div>
                <div class="testbed-content__column-go">GO</div>
            </div>
            <div class="testbed-content__column">
                <div class="testbed-content__column-img">
                    <img src="../assets/img/art.png">
                </div>
                <div class="testbed-content__column-title">Smart<br>Sports</div>
                <div class="testbed-content__column-description">
                    디지털 피트니스 <br> 기반 맞춤 <br> 홈트레이닝 서비스
                </div>
                <div class="testbed-content__column-go">GO</div>
            </div>
            <div class="testbed-content__column">
                <div class="testbed-content__column-img">
                    <img src="../assets/img/art.png">
                </div>
                <div class="testbed-content__column-title">Smart<br>Road</div>
                <div class="testbed-content__column-description">
                    AI와 공간정보 <br> 기술을 활용한 <br> 스마트 도로환경 <br> 개선 서비스
                </div>
                <div class="testbed-content__column-go">GO</div>
            </div>
            
        </div>
    </div>
</template>


<script>
export default ({
    name: 'Testbeds',
    component: {

    }
})
</script>


<style scoped>
.testbed {
    width: 100%;
    height: 100vh;
    border: solid white;
}

.testbed-intro {
    margin: 0 auto;
    margin-top: 180px;
    border: solid green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.testbed-intro__title {
    font-size: 2.25rem;
    font-weight: 800;
}

.testbed-intro__subtitle {
    margin-top: 30px;
    font-size: 1.25rem;
    font-weight: 700;
}

.testbed-content {
    margin: 100px auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.testbed-content__column {
    width: 220px;
    height: 400px;
    border: 2px solid rgba(255,255,255,0.5);
    margin: 30px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.testbed-content__column-img {
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50px;
    background-color: var(--bg-black);
    transition: transform 1s;
    transition-delay: 0.2s;
}

.testbed-content__column-img img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    color: rgba(255,255,255,0.5);
}

.testbed-content__column-title {
    margin-top: 30px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    position: absolute;
    top: 150px;
    color: rgba(255,255,255,0.5);
    transition: transform 1s;
    transition-delay: 0.2s;
}

.testbed-content__column-description {
    margin-top: 30px;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    color: rgba(255,255,255,0.5);
    visibility: hidden;
    transition: visibility 0.1s;
    transition-timing-function: steps(2, end);
    transition-delay: 0.4s;
}

.testbed-content__column-go {
    margin-top: 30px;
    width: 120px;
    height: 50px;
    border-radius: 15px;
    background-color: rgba(255,255,255,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 800;
    position: absolute;
    top: 280px;
}

.testbed-content__column:hover .testbed-content__column-go {
    background-color: #eeac9a;
    color: var(--bg-black);
}

.testbed-content__column:hover .testbed-content__column-img {
    transform: translateY(-90px);
}

.testbed-content__column:hover .testbed-content__column-title {
    transform: translateY(-100px);
}

.testbed-content__column:hover .testbed-content__column-description {
    visibility: visible;
}
</style>
