import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc, orderBy } from 'firebase/firestore';
import { db, auth, signInWithGoogle, logOut } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Download, Trash2, CheckCircle, Clock, LogOut, ShieldAlert, MapPin, Mail } from 'lucide-react';

export default function AdminDashboard() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Basic check for admin email (in a real app, you'd use custom claims or a users collection)
        if (currentUser.email === 'adithyam9951@gmail.com' || currentUser.email === 'sugunaengineeringworks2007@gmail.com') {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isAdmin) return;

    const q = query(collection(db, 'quotes'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const quotesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setQuotes(quotesData);
    }, (error) => {
      console.error("Error fetching quotes:", error);
    });

    return () => unsubscribe();
  }, [isAdmin]);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, 'quotes', id), { status: newStatus });
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status. Check console for details.");
    }
  };

  const deleteQuote = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this quote?")) {
      try {
        await deleteDoc(doc(db, 'quotes', id));
      } catch (error) {
        console.error("Error deleting quote:", error);
        alert("Failed to delete quote. Check console for details.");
      }
    }
  };

  const downloadFile = (fileData: string, fileName: string, fileType: string) => {
    const link = document.createElement('a');
    link.href = `data:${fileType};base64,${fileData}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <div className="min-h-screen bg-zinc-50 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div></div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center px-4">
        <div className="bg-zinc-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-zinc-700">
          <ShieldAlert className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-white mb-2">Admin Access Required</h1>
          <p className="text-zinc-400 mb-8">Please sign in with your authorized Google account to view quotes.</p>
          <button 
            onClick={signInWithGoogle}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  if (isAdmin === false) {
    return (
      <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center px-4">
        <div className="bg-zinc-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-zinc-700">
          <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-white mb-2">Access Denied</h1>
          <p className="text-zinc-400 mb-8">Your account ({user.email}) does not have admin privileges.</p>
          <button 
            onClick={logOut}
            className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <nav className="bg-zinc-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-400 text-zinc-900 flex items-center justify-center rounded font-bold">SEW</div>
          <span className="font-bold text-xl tracking-tight">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-zinc-400 text-sm hidden sm:inline">{user.email}</span>
          <button 
            onClick={logOut}
            className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 px-3 py-2 rounded-md transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900">Quote Requests</h1>
            <p className="text-zinc-500 mt-1">Manage and review incoming manufacturing quotes.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg border border-zinc-200 shadow-sm">
            <span className="text-sm text-zinc-500 font-medium">Total Quotes: </span>
            <span className="text-lg font-bold text-zinc-900">{quotes.length}</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-200">
              <thead className="bg-zinc-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Client Details</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Requirements</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">File</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-zinc-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-zinc-200">
                {quotes.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-zinc-500">
                      No quote requests found.
                    </td>
                  </tr>
                ) : (
                  quotes.map((quote) => (
                    <tr key={quote.id} className="hover:bg-zinc-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                        {quote.createdAt?.toDate ? new Date(quote.createdAt.toDate()).toLocaleDateString() : new Date(quote.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-zinc-900">{quote.name}</div>
                        <div className="text-sm text-zinc-500">{quote.email}</div>
                        <div className="text-sm text-zinc-500">{quote.phone}</div>
                        {quote.location && (
                          <div className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {quote.location}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-zinc-900 max-w-xs truncate" title={quote.requirements}>
                          {quote.requirements}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {quote.fileData ? (
                          <button 
                            onClick={() => downloadFile(quote.fileData, quote.fileName, quote.fileType)}
                            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </button>
                        ) : (
                          <span className="text-sm text-zinc-400 italic">No file</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={quote.status}
                          onChange={(e) => updateStatus(quote.id, e.target.value)}
                          className={`text-sm font-medium rounded-full px-3 py-1 border-0 cursor-pointer focus:ring-2 focus:ring-offset-1 ${
                            quote.status === 'new' ? 'bg-yellow-100 text-yellow-800 focus:ring-yellow-500' :
                            quote.status === 'reviewed' ? 'bg-blue-100 text-blue-800 focus:ring-blue-500' :
                            'bg-green-100 text-green-800 focus:ring-green-500'
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="contacted">Contacted</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <a 
                            href={`mailto:${quote.email}?subject=Re: Your Quote Request to Suguna Engineering Works`}
                            className="text-zinc-500 hover:text-zinc-900 p-2 hover:bg-zinc-100 rounded-md transition-colors"
                            title="Reply via Email"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                          <button 
                            onClick={() => deleteQuote(quote.id)}
                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-md transition-colors"
                            title="Delete Quote"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
