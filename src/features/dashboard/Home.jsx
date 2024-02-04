import { useFormik } from "formik";
import { useAddnewUsersMutation } from "../../servers/user";
import { useNavigate } from "react-router-dom";

function Home() {
  const navi = useNavigate();
  const [nfn] = useAddnewUsersMutation();

  console.log("nn" + nfn);

  var newuserform = useFormik({
    initialValues: { username: "", password: "", role: "", id: "" },
    onSubmit: (values) => {
      nfn(values).then((res) => {
        alert(JSON.stringify(res));
        console.log(values);
      });
    },
  });

  function Login() {
    navi("/login");
  }

  return (
    <div>
      <form onSubmit={newuserform.handleSubmit}>
        <h3>Registration</h3>

        <i className="bi bi-person-fill">Username :</i> <br />

        <input
          type="text"
          name="username"
          onChange={newuserform.handleChange}
          onBlur={newuserform.handleBlur}
        />
        <br />
        <i className="bi bi-lock-fill">Password :</i> <br />

        <input
          type="text"
          name="password"
          onChange={newuserform.handleChange}
          onBlur={newuserform.handleBlur}
        />
        <br />
        Role : <br />
        <input
          type="text"
          name="role"
          onChange={newuserform.handleChange}
          onBlur={newuserform.handleBlur}
        />
        <br />
        <button type="submit" className="btn btn-outline-dark">
          Registration
        </button>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => Login()}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Home;
