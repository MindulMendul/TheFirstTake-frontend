export default function Footer() {
  return (
    <footer className="w-full bg-ccnavy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">The First Take</h3>
            <p className="text-sm mt-2">AI 기반 맞춤형 옷 추천 서비스</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="font-bold mb-2">Contact</h4>
              <p className="text-sm">Email: contact@thefirsttake.com</p>
              <p className="text-sm">Phone: 02-1234-5678</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-sm hover:text-gray-300">Instagram</a>
                <a href="#" className="text-sm hover:text-gray-300">Twitter</a>
                <a href="#" className="text-sm hover:text-gray-300">Facebook</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} The First Take. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 