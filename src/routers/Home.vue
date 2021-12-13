<template>
    <div class="home">
        <div class="home-main">
            <div class="home-main__content">
                <div class="home-main__content-title">SIHEUNG SMART CITY</div>
                <div class="home-main__content-subtitle">미래를 키우는 생명도시, 시흥스마트시티</div>
            </div>  
        </div>

        <div class="home-description">
            <div class="home-description">
                <div class="home-description__boxes">
                    <div class="home-description__boxes-right"><i class="fas fa-question"></i></div>
                    <div class="home-description__boxes-left"><i class="fas fa-question"></i></div>
                </div>
                <div class="home-description__title">WHAT IS ?</div>
                <div class="home-description__content">
                    시흥스마트시티는 지능정보기술을 우리가 사는 도시에 적용하여, 도시문제를 해결하고 시민의 편의를 증진시키는 미래형 도시입니다. <br>
                    정보통신기술(ICT), 인공지능(AI), 사물인터넷(IoT), 빅데이터 등 신기술을 융합해 교통혼잡, 환경오염 등 각종 도시문제를 해결합니다. <br>
                    재난관리시스템, 지능형교통시스템, 시설물관리시스템 등의 도시관리시스템을 통해 도시 운영 효율성을 증대하는 것이 목표입니다.
                </div>
            </div>
        </div>

        <div class="home-more">
            <div class="home-more__title">MORE</div>
            <div class="home-more__content">
                <article class="home-more__content-card">
                    <div class="home-more__content-card-img"></div>
                    <div class="home-more__content-card-description">
                        <span>Future</span>
                        시흥시의 미래상
                    </div>
                    <div class="home-more__content-card-go">GO</div>
                </article>
                <article class="home-more__content-card">
                    <div class="home-more__content-card-img"></div>
                    <div class="home-more__content-card-description">
                        <span>Strategy</span>
                        비즈니스 구축을 위한 전략
                    </div>
                    <div class="home-more__content-card-go">GO</div>
                </article>
                <article class="home-more__content-card">
                    <div class="home-more__content-card-img"></div>
                    <div class="home-more__content-card-description">
                        <span>Service</span>
                        진행 중인 핵심 비즈니스
                    </div>
                    <div class="home-more__content-card-go">GO</div>
                </article>
                <article class="home-more__content-card">
                    <div class="home-more__content-card-img"></div>
                    <div class="home-more__content-card-description">
                        <span>Partners</span>
                        시흥시 연구, 개발 기관
                    </div>
                    <div class="home-more__content-card-go">GO</div>
                </article>
            </div>
        </div>
    </div>
</template>


<script>
export default ({
    name: 'Home',
})
</script>


<style scoped>

.home-main {
    width: 100%;
    height: 60vh;
    background-image: url('../assets/img/home-main.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    color: black;
}


.home-main__content {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home-main__content-title {
    margin-top: 180px;
    font-size: 3rem;
    font-weight: 800;
    padding: 0px;
    padding-bottom: 0px;
}

.home-main__content-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 5px;
    opacity: 0.5;
}

.home-description {
    box-sizing: border-box;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.home-description__boxes {
    margin-top: 100px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.home-description__boxes-right {
    margin-top: 50px;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    margin-left: 74%;
    background-color: #EEAC9A;
    color: #C84522;
    transform: rotate(30deg);
}

.home-description__boxes-left {
    margin-top: 50px;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    margin-left: 20%;
    background-color: #AFB5C2;
    color: #112B71;
    transform: rotate(-30deg);
}

.home-description__title {
    margin-top: 100px;
    font-size: 2.25rem;
    font-weight: 800;
}

.home-description__content {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 200%;
    margin-top: 50px;
    opacity: 0.8;
}

.home-more {
    margin-top: 150px;
    box-sizing: border-box;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home-more__title {
    margin-top: 100px;
    font-size: 2.25rem;
    font-weight: 800;
}

.home-more__content {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.home-more__content-card {
    margin: 100px 20px;
    box-sizing: border-box;
    width: 250px;
    height: 400px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2D393B;
}

.home-more__content-card-img {
    box-sizing: border-box;
    width: 190px;
    height: 190px;
    border-radius: 30px;
    margin: 5px auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    border: solid red;
}

.home-more__content-card-description {
    box-sizing: border-box;
    width: 190px;
    height: 100px;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
}

.home-more__content-card-description span{
    font-size: 1.4rem;
    font-weight: 700;
}

.home-more__content-card-go {
    box-sizing: border-box;
    width: 190px;
    height: 60px;
    margin: 5px auto;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 800;
    padding-top: 10px;
    background-color: #9F9B97;
    color: black;
}
</style>
