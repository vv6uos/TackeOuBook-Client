import React, { useState, useEffect } from "react";
import ButtonDisabledTestArea from "./ButtonTest";
import DoubleCheck from "./DoubleCheck";
import SessionTest from "./SessionTest";

function TestPage() {
  return (
    <>
      <SessionTest />
      {inputAB()}
      <ButtonDisabledTestArea />
      <DoubleCheck />
    </>
  );
}
function inputAB() {
  var q = 1;
  var w = 2;
  var result = plus(q, w) * multiple(q, w);
  return result;
}
function plus(a, b) {
  var result = a + b;
  return a + b;
}

function multiple(a, b) {
  var result = a * b;

  return result;
}
export default TestPage;
