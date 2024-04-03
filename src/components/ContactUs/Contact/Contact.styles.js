import styled from 'styled-components';

export const ContactSection = styled.section`
  width: 100%;
  padding: 50px 0 30px;
  border-bottom: 1px solid var(--gray-50);
  @media screen and (max-width:575px) {
    border-bottom: none;
  }
  @media screen and (min-width:992px) {
    padding: 100px 0 50px;
  }
  .container{ 
    display: flex;
    @media screen and (max-width:768px) {
        flex-direction: column;
    }
  }
  .form-outer{
    .input-wrap{
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        @media screen and (max-width:575px) {
            flex-direction: column;
        }
    } 
    .textarea-wrap{
        margin-bottom: 20px;
    }
  }
`

export const FromWrap = styled.div`
    max-width: 610px;
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.09);
    padding: 30px 30px;
    @media screen and (max-width:768px) {
        max-width: 100%;
        margin-bottom: 55px;
        p{
            font-size: 16px;
        }
    }
    .title{
        font-weight: 500;
        font-size: 44px;
        @media screen and (max-width:991px) {
            font-size: 24px;
            margin-bottom: 10px;
        }
    }
`
export const GetTouchWrapper = styled.div`
    max-width: 470px;
    margin-left: auto;
    padding-left: 20px;
    @media screen and (min-width:1200px) {
        padding-left: 50px;
    }
    @media screen and (max-width:768px) {
        max-width: 100%;
        margin-left: 0;
    }
    .small{
        font-size: 18px;
        font-weight: 400;
        color: var(--body-text-25);
        text-transform: uppercase;
        display: flex;
        margin-bottom: 15px;
    }
    .title{
        font-size: 36px;
        font-weight: 500;
        line-height: 42px;
        @media screen and (min-width:1025px) {
            font-size: 44px;
            line-height: 50px;
        }
        @media screen and (max-width:991px) {
            font-size: 24px;
            line-height: 36px;
        }
    }
    p{
        font-size: 18px;
        @media screen and (max-width:991px) {
            font-size: 16px;
        }
    }
    .contact-listed{
        margin-top: 30px;
        li{
            margin-bottom: 30px;
            &:last-child{
                margin-bottom: 0;
            }
        }
        .contact-item{
            display: flex;
            align-items: center;
            .icon-box{
                min-width: 74px;
                height: 74px;
                border-radius: 9px;
                background: var(--black);
                display: inline-flex;
                justify-content: center;
                align-items: center;
                margin-right: 20px;
                @media screen and (max-width:992px) {
                    min-width: 65px;
                    height: 65px;
                }
                @media screen and (max-width:768px) {
                    min-width: 50px;
                    height: 50px;
                    img{
                        width: 50%;
                    }
                }
            }
            .sub-title{
                font-size: 24px;
                margin-bottom: 15px;
                @media screen and (max-width:991px) {
                    margin-bottom: 8px;
                }
            }
        }
    }
`

export const MapSection = styled.section`
    width: 100%;
    padding: 60px 0;
    @media screen and (max-width:575px) {
        padding-top: 25px;
    }
    .map-wrap{
        width: 100%;
        height: 500px;
        margin-bottom: 0px;
        @media screen and (max-width:768px) {
            height: 260px;
        }
    }
`