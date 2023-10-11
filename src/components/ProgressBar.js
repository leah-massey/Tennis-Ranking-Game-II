import React from "react";
import Play from "../pages/play";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

function ProgressBar() {
  const [changeColour, setChangeColour] = useState(true);

  //check if ranking is guessed

  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-10 lg:grid-cols-20">
        {changeColour ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>1</p>
          </div>
        )}
        <div className=" bg-cream m-2 flex items-center justify-center">
          <p>2</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>3</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>4</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>5</p>
        </div>
        <div className=" bg-cream m-2 flex items-center justify-center">
          <p>6</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>7</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>8</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>9</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>10</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>11</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>12</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>13</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>14</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>15</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>16</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>17</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>18</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>19</p>
        </div>
        <div className=" bg-cream  m-2 flex items-center justify-center">
          <p>20</p>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
