using Volo.Abp.Settings;

namespace SHFT.Settings;

public class SHFTSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(SHFTSettings.MySetting1));
    }
}
