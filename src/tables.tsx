import React from "react";
import type { nameDescriptionLinkTableProps } from "./types/tableTypes";

export function NameDescriptionLinkTable(props: nameDescriptionLinkTableProps) {
    const table: any[] = []

    const theadKey = "00"; // need to have a unique key for thead
    const tbodyKey = "01"; // need to have a unique key for tbody

    const headerNameCell = React.createElement("th", {}, "name");
    const headerDescriptionLinkCell = React.createElement("th", {}, "description");
    const tableRow = React.createElement("tr", {}, headerNameCell, headerDescriptionLinkCell);
    const tableHeader = React.createElement("thead", {key: theadKey}, tableRow);
    table.push(tableHeader);

    const tableBodyArray: any[] = []
    for (let i = 0; i < props.nameDescriptionLinkRecords.length; i++) {
        const nameCell = React.createElement("td", {}, props.nameDescriptionLinkRecords[i].name);
        const descriptionLinkCell = React.createElement("td", {}, props.nameDescriptionLinkRecords[i].descriptionLink);
        const tableRow = React.createElement("tr", {key: i}, nameCell, descriptionLinkCell);
        tableBodyArray.push(tableRow);
    }
    const tableBody = React.createElement("tbody", {key: tbodyKey}, tableBodyArray);
    table.push(tableBody);

    return <table>{table}</table>
}