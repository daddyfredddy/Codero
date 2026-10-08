function Section() {
  return (
    <div>
      <form>
        <div class="flex flex-col items-center">
          <h2 class="text-xl font-bold">Production Code</h2>
          <div class="flex mt-4">
            <input
              type="text"
              placeholder="Enter production code"
              class="w-full outline-none rounded-3xl border border-kalas px-4 py-2 "
            />
          </div>
          <button
            type="submit"
            class="bg-gray-900 text-white hover:bg-kalas mt-4 px-4 py-2 rounded-2xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Section;
