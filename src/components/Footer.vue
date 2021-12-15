<template>
    <div class="footer">
        <div class="footer-content">
            서울대학교 차세대융합기술연구원 <span><a href="https://whconlab.firebaseapp.com/" target="_blank">웨어러블&헬스케어 융합연구실</a></span> <br>
            (우) 16229 경기도 수원시 영통구 광교로 145, 13층 웨어러블&헬스케어 융합연구실  |  TEL 031-888-9083  |<br>
            Wearable & Healthcare Convergence Lab<br>
            Copyright © 2021 All rights reserved <br>
        </div>   
    </div>
</template>


<script>
export default ({
    name: 'Footer',
})
</script>


<style scoped>
.footer {
    box-sizing: border-box;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 50px;
    font-size: 1rem;
    font-weight: 700;
    background-color: black;
    color: white;
    line-height: 150%;
}

.footer a{
    color: #6fd6ff;
    text-decoration: none;
}
</style>
