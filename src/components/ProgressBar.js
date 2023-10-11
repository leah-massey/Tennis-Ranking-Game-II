import React from "react";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import femalePlayerList from "./femalePlayerList";

function ProgressBar() {
  console.log("progressbar ");
  console.log(femalePlayerList); // returns full updated list of players as you play

  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-10 lg:grid-cols-20">
        {femalePlayerList[0].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>1</p>
          </div>
        )}

        {femalePlayerList[1].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>2</p>
          </div>
        )}

        {femalePlayerList[2].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>3</p>
          </div>
        )}

        {femalePlayerList[3].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>4</p>
          </div>
        )}

        {femalePlayerList[4].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>5</p>
          </div>
        )}

        {femalePlayerList[5].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>6</p>
          </div>
        )}

        {femalePlayerList[6].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>7</p>
          </div>
        )}

        {femalePlayerList[7].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>8</p>
          </div>
        )}

        {femalePlayerList[8].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>9</p>
          </div>
        )}

        {femalePlayerList[9].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>10</p>
          </div>
        )}

        {femalePlayerList[10].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>11</p>
          </div>
        )}

        {femalePlayerList[11].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>12</p>
          </div>
        )}

        {femalePlayerList[12].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>13</p>
          </div>
        )}

        {femalePlayerList[13].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>14</p>
          </div>
        )}

        {femalePlayerList[14].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>15</p>
          </div>
        )}

        {femalePlayerList[15].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>16</p>
          </div>
        )}

        {femalePlayerList[16].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>17</p>
          </div>
        )}

        {femalePlayerList[17].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>18</p>
          </div>
        )}

        {femalePlayerList[18].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>19</p>
          </div>
        )}

        {femalePlayerList[19].guessed ? (
          <div className=" bg-forest  m-2 flex items-center justify-center">
            <FaCheck className="fill-cream" />
          </div>
        ) : (
          <div className=" bg-cream  m-2 flex items-center justify-center">
            <p>20</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ProgressBar;
