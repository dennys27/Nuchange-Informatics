import { Button, Grid, TextField } from '@mui/material';
import { Box, Container } from '@mui/system'
import React from 'react'
import { useState,useEffect } from "react";

const Hero = () => {
 
  
   const [state, setState] = useState(0);
   const [bluewidth, setBlueWidth] = useState(0);
   const [redwidth, setRedWidth] = useState(0);


    
    //blue tokens
    const [blueToken, setBlueToken] = useState(0);
    const [bluePrefix, setBluePrefix] = useState("");
    const [blueRow, setBlueRow] = useState(0)
 
    //red tokens
    const [redToken, setRedToken] = useState(0);
    const [redPrefix, setRedPrefix] = useState("");
    const [redRow, setRedRow] = useState(0)


     const [blueMap, setBlueMap] = useState([]);
     const [redMap, setRedMap] = useState([]);
   

  const generateToken = () => {

    setBlueWidth(80 * blueRow);

    setRedWidth(80 * redRow);

      if (blueMap.length !== 0) {
          setBlueMap([]);
          setRedMap([]);
        setState(Math.random());
      } else {
        for (let j = 1; j <= blueToken; j++) {
          blueMap.push(
            <Box
              sx={{
                width: "70px",
                height: "70px",
                backgroundColor: "blue",
                borderRadius: "5px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                flexWrap: "wrap",
                margin:"5px"
              
               
              }}
            >
              {`${bluePrefix + j}`}
            </Box>
          );
        }


        for (let i = 1; i <= redToken; i++) {
            redMap.push(
              <Box
                sx={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "red",
                  borderRadius: "5px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  flexWrap: "wrap",
                  margin: "5px",
                }}
              >
                {`${redPrefix + i}`}
              </Box>
            );
        }

        setState(Math.random());
      }
  }

  
      
  useEffect(() => {
    
  },[state])
     

  const handleClear = () => {
       setBlueMap([]);
       setRedMap([]);
    }

    const handleToken = (e, color) => {
        switch (color) {
            case "blue":
          setBlueToken(e.target.value);
            break;
          case "red":
           setRedToken(e.target.value)
            break;
          default:
          alert("invalid entry")
        }
       
    }

    const handlePrefix = (e, color) => {
         switch (color) {
           case "blue":
            setBluePrefix(e.target.value);
             break;
           case "red":
             setRedPrefix(e.target.value);
             break;
           default:
             alert("invalid entry");
         }
       
    }

    const handleRow = (e, color) => {

         switch (color) {
           case "blue":
             setBlueRow(e.target.value);
             break;
           case "red":
             setRedRow(e.target.value);
             break;
           default:
             alert("invalid entry");
         }
         
   
    }
    
  return (
    <>
      <Container
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Box sx={{ display: "block" }}>
          <Box p={1}>
            <TextField
              sx={{ width: "400px" }}
              id="outlined-basic"
              label="Number of blue tokens"
              variant="outlined"
              type="number"
              value={blueToken}
              onChange={(e) => {
                handleToken(e, "blue");
              }}
            />
          </Box>

          <Box p={1}>
            <TextField
              sx={{ width: "400px" }}
              id="outlined-basic"
              label="Blue token prefix"
              variant="outlined"
              value={bluePrefix}
              onChange={(e) => {
                handlePrefix(e, "blue");
              }}
            />
          </Box>

          <Box p={1}>
            <TextField
              sx={{ width: "400px" }}
              id="outlined-basic"
              label="Blue token per row"
              variant="outlined"
              type="number"
              value={blueRow}
              onChange={(e) => {
                handleRow(e, "blue");
              }}
            />
          </Box>
        </Box>

        {/*red token details */}

        <Box sx={{ display: "block" }}>
          <Box p={1}>
            <TextField
              sx={{ width: "400px" }}
              id="outlined-basic"
              label="Number of red tokens"
              variant="outlined"
              value={redToken}
              onChange={(e) => handleToken(e, "red")}
            />
          </Box>

          <Box p={1}>
            <TextField
              sx={{ width: "400px" }}
              id="outlined-basic"
              label="Red token prefix"
              variant="outlined"
              value={redPrefix}
              onChange={(e) => handlePrefix(e, "red")}
            />
          </Box>

          <Box p={1}>
            <TextField
              sx={{ width: "400px" }}
              id="outlined-basic"
              label="Red token per row"
              variant="outlined"
              value={redRow}
              type="number"
              onChange={(e) => handleRow(e, "red")}
            />
          </Box>
        </Box>
      </Container>

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => generateToken()}
          sx={{ margin: "20px" }}
          variant="contained"
        >
          Generate
        </Button>
        <Button
          onClick={() => handleClear()}
          sx={{ margin: "20px" }}
          variant="contained"
        >
          Clear
        </Button>
      </Box>

      {/* tokens */}

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
       
          xs={6}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              
            }}
          >
            <Box
              style={{
                height: "250px",
                display: "flex",
                padding: "10px",
                flexWrap: "wrap",
                width: `${bluewidth}px`,
              }}
            >
              {blueMap.map((item, index) => (
                <>{item}</>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={6}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              
            }}
          >
            <Box
              style={{
                height: "250px",
                display: "flex",
                padding: "10px",
                flexWrap: "wrap",
                width: `${redwidth}px`,
              }}
            >
              {redMap.map((item, index) => (
                <>{item}</>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* <Box
        style={{
          height: "250px",
          display: "flex",
          padding: "10px",
          flexWrap: "wrap",
          width: `${redwidth}px`,
          marginLeft: "40%",
        }}
      >
        {redMap.map((item, index) => (
          <>{item}</>
        ))}
      </Box> */}
    </>
  );
}

export default Hero