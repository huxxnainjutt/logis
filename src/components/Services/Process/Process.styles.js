import styled from 'styled-components';
import ProcessBg from '../../../../public/images/service/step-bg.jpg';
import LineImg from '../../../../public/images/service/step-after-img.svg';
import LineImgMb from '../../../../public/images/service/step-after-img-mobile.svg';

export const ProcessSection = styled.section`
  width: 100%;
  position: relative;
  z-index: 11;
  background: url(${ProcessBg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px 0 30px;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.96;
    background: var(--black, #141416);
    mix-blend-mode: multiply;
    z-index: -1;
  }
  .title{
    color: var(--white);
    margin-bottom: 40px;
  }
  .sub-title{
    font-size: 18px;
    font-weight: 300;
    color: var(--primary);
    margin-bottom: 18px;
    @media screen and (max-width:767px) {
        font-size: 14px;
        margin-bottom: 8px;
    }
  }
`
export const ProcessListedWrap = styled.ul`
    display: flex;
    width: 100%;
    margin-left: -15px;
    margin-right: -15px;
    @media screen and (min-width: 1441px) {
        margin-left: -50px;
        margin-right: -50px;
    }
    @media (min-width: 1025px) and (max-width: 1440px) {
        margin-left: -30px;
        margin-right: -30px;
    }
    @media screen and (max-width:767px) {
        flex-direction: column;
    }
    .item{
        flex-basis: 33.33%;
        max-width: 33.33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        color: var(--white);
        margin-bottom: 20px;
        padding-left: 15px;
        padding-right: 15px;
        position: relative;
        &::after{
            content: '';
            background: url(${LineImg.src});
            width: 100px;
            height: 55px;
            position: absolute;
            right: -45px;
            top: 90px;
            transition: all 0.4s ease-in-out;
            transition-delay: 0.4s;
            @media (min-width: 768px) and (max-width: 1024px) {
                width: 73px;
                height: 40px;
                right: -40px;
                background-size: cover;
            }
            @media screen and (max-width: 767px) {
                right: inherit;
                top: inherit;
                bottom: 0;
                width: 30px;
                height: 58px;
                background: url(${LineImgMb.src});
            }
        }
        &:hover::after{
            transform: rotate(10deg);
        }
        &:last-child{
            &::after{
                display: none;
            }
        }
        @media screen and (min-width: 1441px) {
            padding-left: 50px;
            padding-right: 50px;
        }
        @media (min-width: 1025px) and (max-width: 1440px) {
            padding-left: 30px;
            padding-right: 30px;
        }
        @media screen and (max-width:767px){
            flex-basis: 100%;
            max-width: 100%;
            padding-bottom: 50px;
        }
        .icon-box{
            display: flex;
            align-items: center;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 20px;
            width: 233px;
            height: 233px;
            border-radius: 100%;
            border: 1px dashed var(--primary);
            position: relative;
            z-index: 11;
            @media screen and (max-width: 1024px) {
                width: 170px;
                height: 170px;
                img{
                    max-width: 55%;
                }
            }
            &::before{
                content: "";
                width: calc(100% - 26px);
                height: calc(100% - 26px);
                position: absolute;
                top: 13px;
                left: 13px;
                background: var(--white);
                border-radius: 100%;
                z-index: -1;
                transition: all 0.4s ease-in-out;
            }
            &::after{
                content: '';
                background: url(${LineImg.src});
                width: 100px;
                height: 55px;
                position: absolute;
                right: -125px;
                transition: all 0.4s ease-in-out;
                transition-delay: 0.4s;
                display: none;
                @media (min-width: 768px) and (max-width: 1024px) {
                    width: 73px;
                    height: 40px;
                    right: -78px;
                    background-size: cover;
                }
            }
            &:hover::before{
                transform: scale(1.12);
            }
            &:hover::after{
                /* right: -140px; */
                transform: rotate(10deg);
            }
        }
        .step{
            font-size: 20px;
            font-weight: 500;
            color: var(--primary);
            text-transform: uppercase;
            margin-bottom: 17px;
        }
        .title{
            font-size: 26px;
            color: var(--white);
            margin-bottom: 17px;
            @media (min-width: 768px) and (max-width: 1024px) {
                font-size: 20px;
            }
        }
        p{
            font-size: 16px;
            font-weight: 300;
            line-height: 22px;
            color: var(--white);
            margin-bottom: 10px;
            
        }
        &:last-child{
            .icon-box::after{
                display: none;
            }
        }
    }
`