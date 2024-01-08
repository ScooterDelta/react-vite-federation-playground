import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  email: string;
  password: string;
}

export const FirstForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <div className="mfe1-hero mfe1-bg-base-200">
      <div className="mfe1-hero-content mfe1-flex-col lg:mfe1-flex-row-reverse">
        <div className="mfe1-text-center lg:mfe1-text-left">
          <h1 className="mfe1-text-5xl mfe1-font-bold">Login now!</h1>
          <p className="mfe1-py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="mfe1-mfe1-card mfe1-shrink-0 mfe1-w-full mfe1-max-w-sm mfe1-shadow-2xl mfe1-bg-base-100">
          <form className="mfe1-card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="mfe1-form-control">
              <label className="mfe1-label">
                <span className="mfe1-label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="mfe1-input mfe1-input-bordered"
                {...register('email', { required: true, maxLength: 20 })}
              />
            </div>
            <div className="mfe1-form-control">
              <label className="mfe1-label">
                <span className="mfe1-label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="mfe1-input mfe1-input-bordered"
                {...register('password', { required: true, maxLength: 20 })}
              />
              <label className="mfe1-label">
                <a
                  href="#"
                  className="mfe1-label-text-alt mfe1-link mfe1-link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="mfe1-form-control mfe1-mt-6">
              <button
                className="mfe1-btn mfe1-btn-primary mfe1-btn-outline"
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
