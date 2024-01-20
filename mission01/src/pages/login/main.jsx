import React from "react";
import ReactDOM from "react-dom/client";
  
  const createBody = () => {
  
    return (
    <div className="login">
        <h1 className="login-title">JFAM ID 로그인</h1>
        <form className="login-wrapper">
            <h2 className="sr-only">JFAM 로그인 폼</h2>
            <div className="login-input">
            <div className="id-input-container">
                <label className="sr-only" htmlFor="input-id">아이디</label>
                <input
                id="input-id"
                className="input-id"
                type="text"
                placeholder="아이디"
                autoComplete="username"
                tabIndex="1"
                />
                <span className="id-input-condition"></span>
            </div>
            <div className="password-input-container">
                <label className="sr-only" htmlFor="input-password">비밀번호</label>
                <input
                id="input-password"
                className="input-password"
                type="password"
                placeholder="비밀번호"
                tabIndex="2"
                />
                <span className="password-input-condition"></span>
            </div>
            </div>
            <div className="auto-login">
            <div className="image-container">
                <img
                src="/images/check_filled_white.svg"
                className="auto-login-img"
                id="auto-unchecked"
                />
            </div>
            <label className="auto-login-text">자동로그인</label>
            </div>
            <div className="button-container">
            <button tabIndex="4" className="login-button">로그인하기</button>
            </div>
            <div className="find-login">
            <a href="" className="find-id">아이디 찾기</a>
            <span>|</span>
            <a href="" className="find-password">비밀번호 찾기</a>
            </div>
            <div className="no-account-container">
            <span className="no-account">아직 계정이 없으신가요?</span>
            <a href="/src/pages/signup/index.html" className="to-signup">회원가입하기</a>
            </div>
        </form>
    </div>
    );
};

const bodyElement = document.getElementById("main"); 
const bodyRoot = ReactDOM.createRoot(bodyElement);

bodyRoot.render(createBody());