import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  email: string;
  password: string;
}

export const FirstForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <div className="mfe1d-hero mfe1d-bg-base-200">
      <div className="mfe1d-hero-content mfe1d-flex-col lg:mfe1d-flex-row-reverse">
        <div className="mfe1d-text-center lg:mfe1d-text-left">
          <h1 className="mfe1d-text-5xl mfe1d-font-bold">Login now!</h1>
          <p className="mfe1d-py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="mfe1d-mfe1d-card mfe1d-shrink-0 mfe1d-w-full mfe1d-max-w-sm mfe1d-shadow-2xl mfe1d-bg-base-100">
          <form className="mfe1d-card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="mfe1d-form-control">
              <label className="mfe1d-label">
                <span className="mfe1d-label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="mfe1d-input mfe1d-input-bordered"
                {...register('email', { required: true, maxLength: 20 })}
              />
            </div>
            <div className="mfe1d-form-control">
              <label className="mfe1d-label">
                <span className="mfe1d-label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="mfe1d-input mfe1d-input-bordered"
                {...register('password', { required: true, maxLength: 20 })}
              />
              <label className="mfe1d-label">
                <a
                  href="#"
                  className="mfe1d-label-text-alt mfe1d-link mfe1d-link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="mfe1d-form-control mfe1d-mt-6">
              <button
                className="mfe1d-btn mfe1d-btn-primary mfe1d-btn-outline"
                type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
