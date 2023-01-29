let q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15;

q1 = prompt("Did you pay any W2 Wages in 2020 or 2021?");
if (q1 == "yes") {
  q2 = prompt(
    "Roughly, how many Full Time W2 Employees did you have on average during 2020?"
  );
  console.log("emplyess are " + q2);
  q3 = prompt("Did you start your business before or after Feb 15, 2020?");
}
if (q3 == "before") {
  q4 = prompt("Did you get a PPP loan in 2020 or 2021?");
  //Yes Or No (Move to Next Question)
  console.log(q4);
  q5 = prompt(
    "Did you have a decrease in revenue of at least 50% in any quarter in 2020 compared to 2019?"
  );
  //Yes Or No (Move to Next Question)
  console.log(q5);
  q6 = prompt(
    "Did you have a decrease in revenue of at least 20% in any quarter in 2021 compared to 2019?"
  );

  //Case
  //Case 1
  if (q5 == "yes" && q6 == "yes") {
    console.log("Calculating Results");
  }

  //Case 2
  else if (q5 == "no" && q6 == "no") {
    q7 = prompt(
      "Did you experience any partial or full suspensions of business due to a COVID Government Order in 2020 or 2021?"
    );
    if (q7 == "both") {
      console.log("Calculating Results");
    } else if (q7 == "2020") {
      q8 = prompt("Did you experience a supply chain disruption in 2021?");
      console.log("Calculating Results");
    } else if (q7 == "2021") {
      q9 = prompt("Did you experience a supply chain disruption in 2020?");
      console.log("Calculating Results");
    } else if (q7 == "no") {
      alert("You Do Not Qualify for ERC");
    }
  }

  //Case 3
  else if (q5 == "yes" && q6 == "no") {
    q10 = prompt(
      "Did you experience any partial or full suspensions of business due to a COVID Government Order in 2021?"
    );
    if (q10 == "yes") {
      console.log("Calculating Results");
    } else if (q10 == "no") {
      q8 = prompt("Did you experience a supply chain disruption in 2021?");
      console.log("Calculating Results");
    }
  }

  //Case 4
  else if (q5 == "no" && q6 == "yes") {
    q11 = prompt(
      "Did you experience any partial or full suspensions of business due to a COVID Government Order in 2020?"
    );
    if (q11 == "yes") {
      console.log("Calculating Results");
    } else if (q11 == "no") {
      q9 = prompt("Did you experience a supply chain disruption in 2020?");
      console.log("Calculating Results");
    }
  }
} else if (q3 == "after") {
  q12 = prompt(
    "Did your business generate over $1 million in gross revenue in 2020?"
  );
  if (q12 == "yes") {
    alert("You Do Not Qualify for ERC");
  } else if (q12 == "no") {
    q4 = prompt("Did you get a PPP loan in 2020 or 2021?");
    //Yes Or No (Move to Next Question)
    console.log(q4);
    q6 = prompt(
      "Did you have a decrease in revenue of at least 20% in any quarter in 2021 compared to 2019?"
    );

    //Cases
    //Case 1 Both Yes .... Case No and Yes
    if ((q4 == "yes" && q6 == "yes") || (q4 == "no" && q6 == "yes")) {
      q11 = prompt(
        "Did you experience any partial or full suspensions of business due to a COVID Government Order in 2020?"
      );
      if (q11 == "yes") {
        console.log("Calculating Results");
      } else if (q11 == "no") {
        q9 = prompt("Did you experience a supply chain disruption in 2020?");
        console.log("Calculating Results");
      }
    }

    //Case 2 Both No .... Case Yes and No
    if ((q4 == "no" && q6 == "no") || (q4 == "yes" && q6 == "no")) {
      q7 = prompt(
        "Did you experience any partial or full suspensions of business due to a COVID Government Order in 2020 or 2021?"
      );
      if (q7 == "both") {
        console.log("Calculating Results");
      } else if (q7 == "2020") {
        q8 = prompt("Did you experience a supply chain disruption in 2021?");
        console.log("Calculating Results");
      } else if (q7 == "2021") {
        q9 = prompt("Did you experience a supply chain disruption in 2020?");
        console.log("Calculating Results");
      } else if (q7 == "no") {
        alert("You Do Not Qualify for ERC");
      }
    }
  }
} else {
  alert("You Do Not Qualify for ERC");
}
