import React from "react";
import Link from "./link";
import { css } from "@emotion/core";

class Subbutton extends React.Component {
    render() {
        return (
            <Link
                css={css({
                    boxSizing: "border-box",
                    borderRadius: "4px",
                    backgroundColor: "#3FCCDC",
                    color: "#fff",
                    padding: "15px 20px",
                    fontWeight: "700",
                    float: "right"
                })}
                to="/"
            >
                Subscribe
            </Link>
        )}
     }

export default Subbutton