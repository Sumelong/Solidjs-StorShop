
export default function Logo() {
    return(
       /* <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Easy School Assistant</span>
                <img class="h-8 w-auto" src={logoImage} alt="Logo Image" />
            </a>
        </div>*/
    <div class="container mx-auto p-4">
        <div class="flex items-center">
             {/*Logo*/}
            <img src="/logo.png" alt="Company Logo" class="w-12 h-12 mr-4"/>
                 {/*Company Name and Tagline*/}
                <div>
                    <div class="text-2xl font-bold text-blue-500">Easy School Assistant</div>
                    <div class="text-gray-600">makes working easy</div>
                </div>
        </div>
    </div>

);
}
