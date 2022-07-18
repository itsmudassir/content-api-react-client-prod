import React, { useEffect, createElement, Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import { render } from "react-dom";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";
import { JSONTree } from "react-json-tree";
import {
  getIcon,
  jsonTreeTheme,
  renderResults,
} from "../../utils/autoCompleteSearch";
import "./autoCompleteSearchBox.css";
import { Link, Route, useHistory } from "react-router-dom";
import PageSearch from "../PageSearch/PageSearch";

// appbase client config object
const appbaseClientConfig = {
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "best-buy-dataset",
  credentials: "b8917d239a52:82a2f609-6439-4253-a542-3697f5545947",
  settings: {
    userId: "s@s",
    recordAnalytics: true,
  },
};
// reactivesearch api configuration
const rsApiConfig = {
  highlight: true,
  dataField: [
    {
      field: "name.autosuggest",
      weight: 1,
    },
    {
      field: "name",
      weight: 3,
    },
  ],
  enableRecentSuggestions: true,
  recentSuggestionsConfig: {
    size: 2,
    minHits: 2,
    minChars: 4,
    index: "best-buy-dataset",
  },
  enablePopularSuggestions: true,
  popularSuggestionsConfig: {
    size: 2,
    minChars: 3,
    minCount: 3,
    index: "best-buy-dataset",
  },
  index: "best-buy-dataset",
  size: 5,
};

function AutoCompleteSearch() {
  const history = useHistory();
  const [state, setstate] = useState({});
  const [data, setData] = useState();

  useEffect(() => {
    // alert(state);

    // default usage: plugin to fetch suggestions
    const defaultUsagePlugin = createSuggestionsPlugin(
      appbaseClientConfig,
      {
        ...rsApiConfig,
      },
      {
        onItemSelect: (props) => {
          const data1 = props.item.label;
          // console.log(props);
          sendData(data1);
          console.log(props.item.label);
          // alert(props.item.label);
          const {
            item: { label },
            setQuery,
            refresh,
          } = props;
          setQuery(label.replace(/(<([^>]+)>)/gi, ""));
          renderResults({
            value: label.replace(/(<([^>]+)>)/gi, ""),
            url: appbaseClientConfig.url,
            app: appbaseClientConfig.app,
            credentials: appbaseClientConfig.credentials,
            settings: appbaseClientConfig.settings,
            query: {
              dataField: rsApiConfig.dataField,
            },
          }).then((item) => {
            setstate(item);
          });
          refresh();
        },
      }
    );

    // advanced usage: plugin to fetch suggestions and
    // render custom ui for header, footer and suggestion items
    const advancedUsagePlugin = createSuggestionsPlugin(
      {
        ...appbaseClientConfig,
        settings: {
          ...appbaseClientConfig.settings,
          enableQueryRules: false,
        },
      },
      {
        ...rsApiConfig,
        enableRecentSuggestions: false,
        enablePopularSuggestions: false,
      },
      {
        renderItem: (props) => {
          // console.log(props);
          const { item, setQuery, refresh } = props;
          if (item.type === "index") {
            return (
              <a
                className="aa-item product-item"
                href={item._source.url ?? "https://i.imgur.com/fd4LATD.png"}
                target="_blank"
                rel="noreferrer"
              >
                <div className="product-image">
                  <img src={item._source.image} alt={item.value} />
                </div>
                <div className="product-details">
                  <h4>{item.value}</h4>
                  <p>{item._source.shortDescription}</p>
                </div>
              </a>
            );
          }
          return (
            <div className="item">
              {/* <div className="item__content-wrapper">
                {getIcon(item.type)()}
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.value,
                  }}
                ></span>
              </div>
              <div className="item__actions-wrapper">
                {" "}
                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    setQuery(item.label.replace(/(<([^>]+)>)/gi, ""));
                    refresh();
                  }}
                  type="button"
                  className="set-search-arrow"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path>
                  </svg>
                </button>
              </div> */}
            </div>
          );
        },
        onItemSelect: (props) => {
          // console.log(props);
          const { item, setQuery, refresh } = props;
          const { label } = item;
          if (item?._source?.image) {
            window.open(item?._source?.image);
          } else {
            setQuery(label.replace(/(<([^>]+)>)/gi, ""));
            renderResults({
              value: label.replace(/(<([^>]+)>)/gi, ""),
              url: appbaseClientConfig.url,
              app: appbaseClientConfig.app,
              credentials: appbaseClientConfig.credentials,
              settings: appbaseClientConfig.settings,
              query: {
                dataField: rsApiConfig.dataField,
              },
            }).then((item) => {
              setstate(item);
            });
            refresh();
          }
        },
        renderHeader: (props) => {
          // console.log(props);

          return (
            <h4>
              Products Listing <hr style={{ borderColor: "#d7d5f5" }} />
            </h4>
          );
        },
        renderFooter: (props) => {
          return <hr style={{ borderColor: "#d7d5f5" }} />;
        },
        renderNoResults: (props) => {
          // console.log(props);
          if (props.state.query === "") {
            return (
              <p>Search for something to get direct product suggestions!</p>
            );
          } else {
            return <p>No products found! Try searching for something else!</p>;
          }
        },
      }
    );
    const {
      setActiveItemId,
      setQuery,
      setCollections,
      setIsOpen,
      setStatus,
      setContext,
      refresh,
      update,
      destroy,
    } = autocomplete({
      container: "#autocomplete",
      placeholder: "Search Here...",
      openOnFocus: true,
      initialState: {
        query: "ahsan",
      },
      onStateChange({ state }) {
        // console.log(state);
      },
      plugins: [defaultUsagePlugin, advancedUsagePlugin],
      detachedMediaQuery: "none",
      renderer: { createElement, Fragment },
      render({ children }, root) {
        render(children, root);
      },
    });
    // console.log(state);
  }, []);

  const sendData = (data1) => {
    console.log(data1 + "sendData function");
    setData(data1);
    history.push({ pathname: "/discover/discover_content", state: data1 });
  };

  return (
    <div className="App">
      <div id="autocomplete">
        <div>
          <div className="InputWrapper"></div>
        </div>
      </div>
      {!!state?.hits?.total.value && !!state?.took ? (
        <span className="result-stats">
          {`Displaying ${state?.hits?.hits.length} results, of ${state?.hits?.total?.value} results found in ${state?.took} ms`}
        </span>
      ) : null}
      {/* {console.log("Outer")}
      {console.log(state)} */}
      {/* {state?.hits?.hits && Object.keys(state?.hits?.hits).length ? (
        <div className="response-json">
          <JSONTree
            theme={jsonTreeTheme}
            invertTheme={true}
            data={state?.hits?.hits}
            shouldExpandNode={() => true}
            keyPath={["products"]}
          />
        </div>
      ) : null} */}
    </div>
  );
}

export default AutoCompleteSearch;
