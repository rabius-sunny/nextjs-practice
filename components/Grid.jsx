export default function grid() {
  return <>
    <div style={{ maxWidth: '1100px' }} className="my-8 mx-auto bg-indigo-200 p-2">
      <div className="mgrid mgrid-cols-1 sm-mgrid-cols-2 md-mgrid-cols-3 lg-mgrid-cols-4 gap-4">
        <div className="h-60 bg-indigo-600">df</div>
        <div className="h-60 bg-indigo-600">df</div>
        <div className="h-60 bg-indigo-600">df</div>
        <div className="h-60 bg-indigo-600">df</div>
        <div className="h-60 bg-indigo-600">df</div>
      </div>
    </div>
    <div style={{ maxWidth: '1100px' }} className="my-8 mx-auto bg-indigo-200 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="h-60 bg-indigo-600">df</div>
        <div className="h-60 bg-indigo-600">df</div>
        <div className="h-60 bg-indigo-600">df</div>
        <div className="h-60 bg-indigo-600">df</div>
        <div className="h-60 bg-indigo-600">df</div>
      </div>
    </div>
    <div className="w-11/12 my-8 mx-auto bg-indigo-200 p-2">
      <div className="flex flex-wrap flex-row">
        <div className="m-2 h-60 bg-indigo-600 basis-1/2 grow sm:basis-1/3 md:basis-1/4 lg:basis-1/5 "></div>
        <div className="m-2 h-60 bg-indigo-600 basis-1/2 grow sm:basis-1/3 md:basis-1/4 lg:basis-1/5 "></div>
        <div className="m-2 h-60 bg-indigo-600 basis-1/2 grow sm:basis-1/3 md:basis-1/4 lg:basis-1/5 "></div>
        <div className="m-2 h-60 bg-indigo-600 basis-1/2 grow sm:basis-1/3 md:basis-1/4 lg:basis-1/5 "></div>
        <div className="m-2 h-60 bg-indigo-600 basis-1/2 grow sm:basis-1/3 md:basis-1/4 lg:basis-1/5 "></div>
      </div>
    </div>
  </>
}
