import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import CountUp from "react-countup";

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return <div>Loading ... </div>;
  }
  return (
    <div className="card-container container">
      <Grid container spacing={3} justify="center">
        <Grid xs={12} md={3} item component={Card} className="card infected">
          <CardContent>
            Infected
            <h2>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </h2>
            {new Date(lastUpdate).toDateString()}
            <p>Number of active cases of COVID-19</p>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className="card recovered">
          <CardContent>
            Recovered
            <h2>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </h2>
            {new Date(lastUpdate).toDateString()}
            <p>Number of recoveries from COVID-19</p>
          </CardContent>
        </Grid>
        <Grid xs={12} md={3} item component={Card} className="card deaths">
          <CardContent>
              Deaths
            <h2>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </h2>
              {new Date(lastUpdate).toDateString()}
            <p>
              Number of deaths caused by COVID-19
            </p>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
