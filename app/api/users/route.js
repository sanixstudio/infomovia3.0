export async function GET() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Joe" },
  ];
  return new Response(JSON.stringify(users));
}
