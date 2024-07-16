import PropTypes from "prop-types";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import AuthService from '../utils/auth';

export default function LoginModal({ onClose, openSignupModal, setIsLoggedIn }) {
  const [login, { loading, error }] = useMutation(LOGIN);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const { data } = await login({
          variables: { ...values },
        });

        // Handle successful login
        const { token } = data.login;
        AuthService.login(token);
        setIsLoggedIn(true); // Update the state
        onClose();
      } catch (e) {
        setErrors({ submit: 'Invalid login credentials' });
        console.error('Login failed', e);
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <form
        className="flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80"
        onClick={(event) => event.stopPropagation()}
        onSubmit={formik.handleSubmit}
      >
        <div className="my-3">
          <label htmlFor="username" className="block m-2">
            Username
          </label>
          <input
            className="p-2 m-2 border-2 border-primary w-full"
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
        </div>
        <div className="my-3">
          <label htmlFor="password" className="block m-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="p-2 m-2 border-2 border-primary w-full"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="text-center w-[160px] text-white h-12 bg-primary rounded-3xl px-4 py-2"
            type="submit"
            disabled={formik.isSubmitting || loading}
          >
            {formik.isSubmitting || loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
        <p className="text-center text-xs py-3">
          Not a user?{" "}
          <button
            type="button"
            onClick={openSignupModal}
            className="text-blue-500 underline"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
}

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  openSignupModal: PropTypes.func.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};
