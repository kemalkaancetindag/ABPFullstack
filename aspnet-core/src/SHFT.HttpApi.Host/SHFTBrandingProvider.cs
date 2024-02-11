using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace SHFT;

[Dependency(ReplaceServices = true)]
public class SHFTBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "SHFT";
}
