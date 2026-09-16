import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

 function ProductViewModal({open, setOpen, product ,isAvailable}) {


  const { id, productName, image, description,  quantity, price, discount,  specialPrice} = product;
  const handleClickOpen = () => {
    setOpen(true);
  }



  return (
    <>

      <Dialog open={open} as="div" className="relative z-10 " onClose={close}>
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:max-w-155 md:min-w-155 w-full"
            >

                {image && (
                    <div className = "flex justify-center aspect-3/2">
                        <img 
                            className ="w-full h-full cursor-pointer transition-transform duration-300 hover:scale-105"
                            src = {image}
                            alt = {productName}
                        />
                    </div>
                )}



              <div className ="px-6 pt-10 pb-2">
                    <DialogTitle as="h1" className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-gray-800 mb-4 ">
                            {productName}
                    </DialogTitle>
              </div>
              
              <p className="mt-2 text-sm/6 text-slate-600">
               {description}
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={() => setOpen(false)}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ProductViewModal;