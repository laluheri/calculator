import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Logout from "./Logout";

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");
  const authenticated = JSON.parse(localStorage.getItem("atuhenticated"));
  const [user, setUser] = useState(authenticated);
  const handleClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setInput(input + button);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (e) {
      setResult("Error");
    }
  };

  const reset = () => {
    setInput("");
    setResult(0);
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <div className="calculator-body">
        <div className="result-box">
          <input
            type="text"
            value={input}
            className="result-text"
            disabled
            style={{ width: 200 }}
          />
          <br />
          <input
            type="text"
            value={result}
            className="result-text"
            disabled
            style={{ width: 200 }}
          />
          <br />
          <button
            className="key"
            style={{ width: 110 }}
            onClick={() => handleClick("C")}
          >
            C
          </button>
          <button className="key" onClick={() => handleClick("CE")}>
            CE
          </button>
          <button className="key" onClick={() => handleClick("/")}>
            /
          </button>
          <br />
          <button className="key" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="key" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="key" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="key" onClick={() => handleClick("*")}>
            *
          </button>
          <br />
          <button className="key" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="key" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="key" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="key" onClick={() => handleClick("-")}>
            -
          </button>
          <br />
          <button className="key" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="key" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="key" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="key" onClick={() => handleClick("+")}>
            +
          </button>
          <br />
          <button className="key" onClick={() => handleClick("0")}>
            0
          </button>
          <button
            className="key"
            style={{ width: 120 }}
            onClick={() => handleClick(".")}
          >
            .
          </button>
          <button className="key" onClick={() => handleClick("=")}>
            =
          </button>
          <Logout />
          <p>{terbilang(result)}</p>
        </div>
      </div>
    </div>
  );
}

function terbilang(angka) {
  var bilne = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh",
    "sebelas",
  ];

  if (angka < 12) {
    return bilne[angka];
  } else if (angka < 20) {
    return terbilang(angka - 10) + " belas";
  } else if (angka < 100) {
    return (
      terbilang(Math.floor(parseInt(angka) / 10)) +
      " puluh " +
      terbilang(parseInt(angka) % 10)
    );
  } else if (angka < 200) {
    return "seratus " + terbilang(parseInt(angka) - 100);
  } else if (angka < 1000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 100)) +
      " ratus " +
      terbilang(parseInt(angka) % 100)
    );
  } else if (angka < 2000) {
    return "seribu " + terbilang(parseInt(angka) - 1000);
  } else if (angka < 1000000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 1000)) +
      " ribu " +
      terbilang(parseInt(angka) % 1000)
    );
  } else if (angka < 1000000000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 1000000)) +
      " juta " +
      terbilang(parseInt(angka) % 1000000)
    );
  } else if (angka < 1000000000000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 1000000000)) +
      " milyar " +
      terbilang(parseInt(angka) % 1000000000)
    );
  } else if (angka < 1000000000000000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 1000000000000)) +
      " trilyun " +
      terbilang(parseInt(angka) % 1000000000000)
    );
  }
}

export default Calculator;
