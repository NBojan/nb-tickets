import { NextApiRequest, NextApiResponse } from "next";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

const CodeForSession = async (req: NextApiRequest, res: NextApiResponse) => {
    const { code } = req.query;

    if (code) {
        const supabase = createPagesServerClient({ req, res });
        await supabase.auth.exchangeCodeForSession(String(code))
    }

    return res.redirect("/");
      
}
 
export default CodeForSession;