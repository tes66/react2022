import { TextField, Fab, ThemeProvider, createTheme} from "@material-ui/core";
import { useState, useCallback} from "react";


const theme = createTheme({
    palette: {
      primary: {
        main: "#FF9800",
      },
      secondary: {
        main: "#0098FF",
      },
    },
   });
   

export default function Example() {
 const [value, setValue] = useState("");
  const handleChange = useCallback((e) => {
   setValue(e.target.value);
 }, []);

 return (
     <div>
         <p>Текст</p>
         

<ThemeProvider theme={theme}>
   <TextField
     style={{ margin: '20px' }}
     id="outlined-basic"
     label="Outlined"
     variant="outlined"
     autoFocus //авто фокус
     value={value}
     onChange={handleChange}
   />
   <Fab color="secondary" aria-label="edit">
    редактирование
    </Fab>
    </ThemeProvider>

</div>
 );
}