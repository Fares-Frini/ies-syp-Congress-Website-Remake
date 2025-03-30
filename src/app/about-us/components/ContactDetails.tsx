import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function ContactDetails({ title = "Reach us" }) {
	return (
		<section className="py-8 lg:py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
						{title}
					</h1>
					<p className="mb-8 text-base text-gray-600 dark:text-gray-400 sm:text-lg lg:text-xl">
						We value teamwork and honesty. Join us if you share the same values.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2">
					<Card className="flex flex-col items-center text-center">
                    <CardContent>
							<CardTitle className="text-xl font-bold sm:text-2xl">
								Reach out via Email
							</CardTitle>
							<p className="text-2xl font-medium text-blue-600">
								ies-syp@ieee.org
							</p>
						</CardContent>
					</Card>

					<Card className="flex flex-col items-center text-center">
                    <CardContent>

							<CardTitle className="text-xl font-bold sm:text-2xl">
								Or call us
							</CardTitle>
							<p className="text-2xl font-medium text-blue-600">
								+216 94 175 843
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="mt-8">
					<iframe
						title="tsyp location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6775315.518954521!2d9.560763999999999!3d33.98586695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2stn!4v1683130409503!5m2!1sen!2stn"
						className="w-full aspect-video rounded-lg shadow-md"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>
	);
}