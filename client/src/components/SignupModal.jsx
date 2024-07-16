import PropTypes from "prop-types";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import AuthService from '../utils/auth';

export default function SignupModal({ onClose, setIsLoggedIn }) {
  const [signup, { loading, error }] = useMutation(ADD_USER);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const { data } = await signup({
          variables: { ...values },
        });

        // Handle successful signup
        const { token } = data.addUser;
        AuthService.login(token);
        setIsLoggedIn(true); // Update the state
        onClose();
      } catch (e) {
        setErrors({ submit: 'Invalid signup credentials' });
        console.error('Signup failed', e);
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
          <label htmlFor="email" className="block m-2">
            Email
          </label>
          <input
            className="p-2 m-2 border-2 border-primary w-full"
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
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
            {formik.isSubmitting || loading ? 'Signing up...' : 'Signup'}
          </button>
        </div>
        <p className="text-center text-xs py-3">
          Already a user?{" "}
          <button
            type="button"
            onClick={onClose}
            className="text-blue-500 underline"
          >
            Log in
          </button>
        </p>
      </form>
    </div>
  );
}

SignupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};
