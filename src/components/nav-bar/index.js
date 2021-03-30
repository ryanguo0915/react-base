import React  from "react";
import "./index.css";

const BAR_PAGES = ['Home', 'News', 'Contact', 'About'];

function BarLinks ({updatePage}) {
  return (
    BAR_PAGES.map(page =><a key={page} onClick={() => updatePage(page)}>{page}</a> )
  )
}

export default function NavBar() {
  const [page, updatePage] = React.useState(BAR_PAGES[0]);
  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
          <BarLinks updatePage={updatePage}/>
      </div>

      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
          <span>{`${page.toUpperCase()} PAGE`}</span>
        </section>
      </div>
    </div>
  );
}