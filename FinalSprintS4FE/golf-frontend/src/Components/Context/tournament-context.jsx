import React, {useState} from "react";

const TournamentContext = React.createContext({
    tournamentname: "",
    getTournamentName:(tournamentname) =>{},
    startdate: "",
    getStartDate:(startdate) =>{},
    enddate:  "",
    getEndDate: (enddate) =>{},
    location: "",
    getLocation: (location) =>{},
    entryfee: 0,
    getEntryFee: (entryfee) =>{},

});

export const TournamentContextProvider = (props) =>{
    
    const [tournamentname, setTournamentName] = useState("");
    const [startdate, setStartDate] = useState("")
    const [enddate, setEndDate] = useState("")
    const [locaiton, setLocation ] = useState("")
    const [entryfee, setEntryFee] = useState("")


   const getTournamentNameHandler=(name)=>{
        setTournamentName(name);
    }

    const getStartDateHandler =(startDate) =>{
        setStartDate(startDate);
    }

    const getEndDateHandler =(endDate) =>{
        setEndDate(endDate);
    }

    const getLocationHandler = (loc) =>{
        setLocation(loc);
    }

    const getEntryFeeHandler = (entryFee) =>{
        setEntryFee(entryFee);
    }

    const contextValue = {
        tournamentname: tournamentname,
        getTournamentName: getTournamentNameHandler,
        startdate: startdate,
        getStartDate: getStartDateHandler,
        enddate: enddate,
        getEndDate: getEndDateHandler,
        location: locaiton,
        getLocation: getLocationHandler,
        entryfee: entryfee,
        getEntryFee: getEntryFeeHandler,
    };
    return(
       <TournamentContext.Provider value = {contextValue}>
        {props.children}
       </TournamentContext.Provider>
    );
};

export default TournamentContext;