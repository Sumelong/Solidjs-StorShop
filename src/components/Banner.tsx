export  default function Banner(){
    return(
        <div class="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-700 p-4">
            <div class="container bg- mx-auto p-4">
                <div class="flex items-center">
                    {/*Logo*/}
                    <img src="/logo.png" alt="Company Logo" class="w-24 h-24 mr-4"/>
                    {/*Company Name and Tagline*/}
                    <div>
                        <div class="text-2xl font-bold text-gray-100">Easy School Assistant</div>
                        <div class="text-gray-300">makes working easy</div>
                    </div>
                </div>
            </div>
        </div>


    );
}