import React from "react";

const Footer = () => {
  return (
    <footer>
      <section>
        This data is obtained from &nbsp;
        <a href="https://disease.sh/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19_countries__country_">
          NOVEL Covid API
        </a>
        <br />
        (disease.sh Docs - A third-party open API for disease-related
        statistics)
      </section>
      <section>Last Updated Today</section>
    </footer>
  );
};

export default Footer;
