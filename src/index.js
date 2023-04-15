import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
   palette: {
     primary: {
       main: "#f7baa1",
     },
     secondary: {
       main: "#f7baa1", 
       // #e6ac00
 
       // brown color #8E7E71
     },
   },
   typography: {
     fontFamily: [
       'Lobster', 
       'Libre Franklin',
     ].join(','),
   },
 });
 
 const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <BrowserRouter>
     <ThemeProvider theme={theme}>
       <App />
     </ThemeProvider>
   </BrowserRouter>
 );

