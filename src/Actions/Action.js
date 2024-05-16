import axios from "axios";

const baseUrl="https://json-api-xrl5.onrender.com"

export const postjobseekar = (object) => async(dispatch) => {
    try {
        const {data} = await axios.post(`${baseUrl}/resume`,object)
        // const {data} = await axios.post("http://localhost:8000/resume",object)

        dispatch({ type: "JOBSEEKAR_ADD_SUCCES", payload: data });
    }
    catch (error) {
        dispatch({ type: "JOBSEEKAR_ADD_FAIL", payload: error.message})
    }
}

export const loginJobseekar = (email, password ) => async (dispatch) => {

    try {
        dispatch ({ type: "LOGIN_JOBSEEKAR_REQUEST"})
      const {data} = await axios.get(`${baseUrl}/resume`);
    //   const {data} = await axios.get(`http://localhost:8000/resume`);
    

      const user = data.find((user) => user.email === email && user.password === password);

      if (user) {
          dispatch({ type: "LOGIN_JOBSEEKAR_SUCCESS", payload: user});
          localStorage.setItem('user', JSON.stringify(user));
          
      }  else {
        dispatch({ type: "LOGIN_JOBSEEKAR_FAILURE" ,payload: "Data not match"});

      }
    } catch (error) {
        dispatch({ type: "LOGIN_JOBSEEKAR_FAILURE" , payload: error.message});
    }
  };

  export const getSinglejobseekar = (id) => async(dispatch) => {
    try {
        dispatch ({ type: "SINGLE_JOBSEEKAR_REQUEST"});
        const {data} = await axios.get(`${baseUrl}/resume/${id}`);
        // const {data} = await axios.get(`http://localhost:8000/resume/${id}`);

        dispatch ({ type: "SINGLE_JOBSEEKAR_SUCCES", payload: data})
    } catch (error) {
        dispatch ({ type: "SINGLE_JOBSEEKAR_FAIL", payload: error.message})
    }
}

  export const addProfileInfo = (id, Object) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`${baseUrl}/resume/${id}`, Object)
        // const {data} = await axios.patch(`http://localhost:8000/resume/${id}`, Object)

        console.log(data,"yo bro data");
        dispatch({ type: "UPDATE_PROFILE_SUCCES", payload: data})
    } catch(error){
        dispatch({ type: "UPDATE_PROFILE_FAILURE", payload: error.message})
    }
}

export const addContactInfo = (id, Object) => async (dispatch) => {
    try {
        // const {data} = await axios.put(`${baseUrl}/resume/${id}`, Object)
        const {data} = await axios.put(`${baseUrl}/resume/${id}`, Object)

        dispatch({ type: "ADD_CONTACTINFO_SUCCES", payload: data})
    } catch(error){
        dispatch({ type: "ADD_CONTACTINFO_FAILURE", payload: error.message})
    }
}

export const addExperienceInfo = (id, Object) => async (dispatch) => {
    try {
        // const {data} = await axios.put(`http://localhost:8000/resume/${id}`, Object)
        const {data} = await axios.put(`${baseUrl}/resume/${id}`, Object)

        dispatch({ type: "ADD_EXPERIENCEINFO_SUCCES", payload: data})
    } catch(error){
        dispatch({ type: "ADD_EXPERIENCEINFO_FAILURE", payload: error.message})
    }
}