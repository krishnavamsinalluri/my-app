import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAddNewuserMutation } from "../../servers/user";

function Home() {
  var [nnf]=useAddNewuserMutation()
  const navi = useNavigate();

  var newuserform = useFormik({
    initialValues: { "username":"","password":"","role":"", },
    onSubmit: (values) => {
      nnf(values).then((res) => {

        alert("Your are Registered");
        console.log(values);
      });
    },
  });

  function Login() {
    navi("/login");
  }

  return (
    <div className="home row">
        <div className="col">
        <img width={"600px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRneROQwJ6GeinratuR0mnQOtNilVatiP_T_Tf1hm8g&s" alt="" />

        </div>

          <div className=" item col"  >

          <form onSubmit={newuserform.handleSubmit}  >
        <h3>Registration</h3>

        <i className="bi bi-person-fill">Username :</i> <br />

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={newuserform.handleChange}
          onBlur={newuserform.handleBlur}
        />
        <br />
        <i className="bi bi-lock-fill">Password :</i> <br />

        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={newuserform.handleChange}
          onBlur={newuserform.handleBlur}
        />
        <br />
        Role : <br />
        <input
          type="text"
          name="role"
          placeholder="Role"
          onChange={newuserform.handleChange}
          onBlur={newuserform.handleBlur}
        />
        <br /> <br />
        <button  className="btn btn-outline-dark">
          Registration
        </button> or
        <button
          className="btn btn-outline-dark"
          onClick={() => Login()}
        >
          Login
        </button>
      </form>
          </div>
    </div>
  );
}

export default Home;