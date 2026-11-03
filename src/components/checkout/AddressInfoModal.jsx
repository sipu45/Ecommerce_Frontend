import {  Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"


const AddressInfoModal = ({ open , setOpen , children}) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
               <div className ="px-6 py-6">
                    {children}
               </div>
            <div className="flex gap-4">
                <button onClick={()=> setOpen(false)}>Cancel</button>
                <button onClick={()=> setOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
  );
}

export default AddressInfoModal
