import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => saveToLocalStorage(data);

  const saveToLocalStorage = (data) => {
    const dataArray = JSON.parse(localStorage.getItem("data")) || [];
    dataArray.push(data);
    localStorage.setItem("data", JSON.stringify(dataArray));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Siapa Nama Anda?</label>
        <input
          id="name"
          defaultValue="test"
          {...register("name", { required: "Name is required" })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Berapa Umur Anda?</label>
        <input
          id="age"
          type="number"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Must be at least 18" },
            valueAsNumber: true 
          })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.age && <span className="text-red-500 text-xs">{errors.age.message}</span>}
      </div>

      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Apa Jenis Kelamin Anda?</label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Laki-laki"
              {...register("gender", { required: "Please select your gender" })}
              className="form-radio"
            />
            <span className="ml-2">laki-laki</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Perempuan"
              {...register("isSmoke", { required: "Please select your gender" })}
              className="form-radio"
            />
            <span className="ml-2">Perempuan</span>
          </label>
        {errors.gender && <span className="text-red-500 text-xs">{errors.gender.message}</span>}
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-700">Apakah Anda Perokok?</span>
        <div className="mt-1 space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="true"
              {...register("isSmoke", { required: "Please select if you are a smoker" })}
              className="form-radio"
            />
            <span className="ml-2">Ya</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="false"
              {...register("isSmoke", { required: "Please select if you are a smoker" })}
              className="form-radio"
            />
            <span className="ml-2">Tidak</span>
          </label>
        </div>
        {errors.isSmoke && <span className="text-red-500 text-xs">{errors.isSmoke.message}</span>}
      </div>

      { (
        <div className="flex flex-col">
          <span className="block text-sm font-medium text-gray-700">
            Jika anda perokok, rokok apa yang anda pernah coba?
          </span>
          <div className="mt-1 space-y-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="gudang garam"
                {...register("cigarettes")}
                className="form-checkbox"
              />
              <span className="ml-2">Gudang Garam</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="lucky strike"
                {...register("cigarettes")}
                className="form-checkbox"
              />
              <span className="ml-2">Lucky Strike</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="marlboro"
                {...register("cigarettes")}
                className="form-checkbox"
              />
              <span className="ml-2">Marlboro</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="esse"
                {...register("cigarettes")}
                className="form-checkbox"
              />
              <span className="ml-2">Esse</span>
            </label>
          </div>
        </div>
      )}

      <input
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 cursor-pointer"
      />
    </form>
  );
}