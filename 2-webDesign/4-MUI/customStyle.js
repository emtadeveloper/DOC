/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
=================================================================================================================================

1- sx  

<Button
                variant="contained"
                sx={{
                    backgroundColor: "skyblue",
                    color: "#888",
                    margin: 5,
                    "&:hover": {
                        backgroundColor: "lightblue",
                        "&:disabled": {
                            backgroundColor: "gray",
                            color: "white",
                        },
                    },
                }}
            >
                Contained
            </Button>


=================================================================================================================================

2 - styled

const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
        backgroundColor: "lightblue",
    },
    "&:disabled": {
        backgroundColor: "gray",
        color: "white",
    },
});

function App() {
    return (
        <div className="App">
            <BlueButton>Hi</BlueButton>
        </div>
    );
}

=================================================================================================================================

3 - theme 

theme.js
 
import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: { main: "#1760a5", light: "skyblue " },
        secondary: { main: "#15c630" },
        otherColor: { main: "#999" },
    },
});
 
index.js

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

به هر یک از کامپوننت هامون بدهیم color  حالا هر جا که خواستیم بیایم  و استفاده بکنیم کافی هستش که بیایم و فقط به عنوان پراپس 

<Button variant="contained" color="otherColor">A</Button>
        
<Button variant="contained" color="secondary">B</Button>
          
بیایم و تم رو مشخص کنیم بهتر هستش که به شیوه زیر عمل کنیم styled  حالا اگر خواستیم با استفاده از       

const BlueButton = styled(Button) ( ({theme})=> ({   backgroundColor: theme.palette.otherColor.main  });
  

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
